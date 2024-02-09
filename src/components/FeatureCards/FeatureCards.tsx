import type { Breakpoint } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { FeatureCard } from 'src/components';
import { useFeatureCards } from 'src/hooks';
import { useSettingsStore } from 'src/stores';
import type { FeatureCardData } from 'src/types';
import { shallow } from 'zustand/shallow';
import { FeatureCardsContainer } from '.';
import { useFetchUser } from 'src/hooks/useFetchUser';

export const FeatureCards = () => {
  const [featureCards, setFeatureCards] = useState<FeatureCardData[]>([]);
  const [personalizedFeatureCards, setPersonalizedFeatureCards] = useState<
    FeatureCardData[]
  >([]);
  const [disabledFeatureCards, welcomeScreenClosed] = useSettingsStore(
    (state) => [state.disabledFeatureCards, state.welcomeScreenClosed],
    shallow,
  );

  const { featureCards: data, isSuccess } = useFeatureCards();
  const { featureCards: personalizedCardsFetched } = useFetchUser();

  const featureCardsFetched = useMemo(() => {
    if (Array.isArray(data) && !!data.length) {
      return data?.filter(
        (el, index) =>
          isSuccess &&
          el.attributes.DisplayConditions &&
          !disabledFeatureCards.includes(el.attributes.DisplayConditions?.id),
      );
    }
    // trigger featureCardsFetched-filtering only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isSuccess]);

  useEffect(() => {
    if (Array.isArray(featureCardsFetched)) {
      !!featureCardsFetched.length &&
        setFeatureCards(featureCardsFetched?.slice(0, 2));
    }
  }, [featureCardsFetched]);

  useEffect(() => {
    if (Array.isArray(personalizedCardsFetched)) {
      setPersonalizedFeatureCards(personalizedCardsFetched?.slice(0, 1));
    }
  }, [personalizedCardsFetched]);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg' as Breakpoint));
  return (
    isDesktop &&
    welcomeScreenClosed && (
      <FeatureCardsContainer>
        {personalizedFeatureCards.map((cardData, index) => {
          return (
            <FeatureCard
              isSuccess={isSuccess}
              data={cardData}
              key={`feature-card-p-${index}`}
            />
          );
        })}
        {featureCards.map((cardData, index) => {
          return (
            <FeatureCard
              isSuccess={isSuccess}
              data={cardData}
              key={`feature-card-${index}`}
            />
          );
        })}
      </FeatureCardsContainer>
    )
  );
};
