import type { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';

/* Strapi */
interface MediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface MediaData {
  id: number;
  attributes: MediaAttributes;
}

interface MediaAttributes {
  name: string;
  alternativeText: string | undefined;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    [key: string]: MediaFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}

interface StrapiMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export type StrapiResponseData<T> = T[];

export interface StrapiResponse<T> {
  data: StrapiResponseData<T>;
  meta: StrapiMeta;
}

export interface StrapiImageData {
  data: MediaData;
}

/* Feature-Cards */
export interface FeatureCardData {
  id: number;
  attributes: FeatureCardAttributes;
}
interface FeatureCardDisplayConditions {
  id: string;
  mode: string;
  showOnce?: boolean;
}

interface FeatureCardAttributes {
  Title: string;
  Subtitle: string;
  CTACall: string;
  URL: string;
  TitleColor: string | null;
  CTAColor: string | null;
  DisplayConditions: FeatureCardDisplayConditions;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  locale: string;
  BackgroundImageLight: StrapiImageData;
  BackgroundImageDark: StrapiImageData;
  localizations: {
    data: any[];
  };
}

/* Tags */
export interface TagData {
  data: TagAttributes[];
}
export interface TagAttributes {
  attributes: {
    Title: string;
    TextColor?: string;
    BackgroundColor?: string;
    createdAt: string;
    locale: string;
    publishedAt: string | null;
    updatedAt: string;
  };
  id: number;
}

/* FAQ-Items */
interface FaqItemAttributes {
  Question: string;
  Answer: RootNode[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  displayOnBlogPage: boolean;
}

export interface FaqMeta {
  id: number;
  attributes: FaqItemAttributes;
}

export interface FaqData {
  data: FaqMeta[];
}

/* Author */
export interface AuthorData {
  attributes: any;
  data: AuthorAttributes;
}
interface AuthorAttributes {
  attributes: {
    Name: string;
    createdAt: string;
    publishedAt: string | null;
    updatedAt: string;
    Avatar: AvatarItem;
    Role: string;
  };
  id: number;
}

export interface AvatarItem {
  data: AvatarData;
}

export interface AvatarData {
  id: number;
  attributes: MediaAttributes;
}

/* Blog */
export interface BlogArticleData {
  id: number;
  attributes: BlogArticleAttributes;
}
export interface BlogArticleAttributes {
  Title: string;
  Subtitle: string;
  Content: RootNode[];
  Image: StrapiImageData;
  Slug: string;
  createdAt: string;
  updatedAt: string;
  tags: TagData;
  author: AuthorData;
  faq_items: FaqData;
  publishedAt: string | null;
  locale: string;
  localizations: {
    data: any[];
  };
}
