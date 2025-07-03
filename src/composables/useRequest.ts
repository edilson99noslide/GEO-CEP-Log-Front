// src/composables/useRequest.ts
import { ref } from 'vue';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { api } from '../../src/lib/axios';

export function useRequest<T = any>() {
  const data = ref<T | null>(null);
  const error = ref<string | null>(null);
  const loading = ref(false);

  async function request(config: AxiosRequestConfig): Promise<AxiosResponse<T> | void> {
    loading.value = true;
    error.value = null;

    try {
      const response = await api.request<T>(config);

      data.value = response.data;

      return response;
    } catch (err: any) {
      error.value = err?.response?.data?.message || 'Request failed.';

      console.error(err);
    } finally {
      loading.value = false;
    }
  }

  return {
    data,
    error,
    loading,
    request,
  };
}
