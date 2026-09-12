import { API_CONFIG } from "./config";
import {
  Coordinates,
  ForecastData,
  GeocodingResponse,
  WeatherData,
} from "./types";

class WeatherAPI {
  private createUrl(endpoint: string, params: Record<string, string | number>) {
    const searchParams = new URLSearchParams({
      appid: API_CONFIG.API_KEY,
      ...params,
    });
    return `${endpoint}?${searchParams.toString()}`;
  }
  private async fetchData<T>(url: string): Promise<T> {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      return (await response.json()) as T;
    } catch (error) {
      console.error("Fetch failed:", error);
      throw error;
    }
  }
  async getCurrentWeather({ lat, lon }: Coordinates): Promise<WeatherData> {
    const url = this.createUrl(`${API_CONFIG.baseUrl}/weather`, {
      lat: lat.toString(),
      lon: lon.toString(),
      units: API_CONFIG.DEFAULT_PARAMS.units,
    });
    return this.fetchData<WeatherData>(url);
  }
  async getForecast({ lat, lon }: Coordinates): Promise<ForecastData> {
    const url = this.createUrl(`${API_CONFIG.baseUrl}/forecast`, {
      lat: lat.toString(),
      lon: lon.toString(),
      units: API_CONFIG.DEFAULT_PARAMS.units,
    });
    return this.fetchData<ForecastData>(url);
  }
  async reverseGeocode({
    lat,
    lon,
  }: Coordinates): Promise<GeocodingResponse[]> {
    const url = this.createUrl(`${API_CONFIG.geo}/reverse`, {
      lat: lat.toString(),
      lon: lon.toString(),
      limit: "1",
    });
    return this.fetchData<GeocodingResponse[]>(url);
  }
  //   async getUVIndex() {}
  //   async getAirQuality() {}
  //   async getAstronomy() {}
  //   async getSunriseSunset() {}
  //   async getAirPollution() {}
  //   async getHistoricalWeather() {}
  //   async getHistoricalForecast() {}
}

export const weatherAPI = new WeatherAPI();
