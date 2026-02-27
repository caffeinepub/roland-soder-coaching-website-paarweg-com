import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Pricing } from '../backend';

export function useGetAllPricingEntries() {
  const { actor, isFetching } = useActor();

  return useQuery<Pricing[]>({
    queryKey: ['pricingEntries'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllPricingEntries();
    },
    enabled: !!actor && !isFetching,
  });
}
