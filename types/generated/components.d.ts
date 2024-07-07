import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogFeaturedPost extends Schema.Component {
  collectionName: 'components_blog_featured_posts';
  info: {
    displayName: 'FeaturedPost';
    icon: 'layer';
  };
  attributes: {
    FeaturedPostHeading: Attribute.String;
    Post: Attribute.Relation<
      'blog.featured-post',
      'oneToOne',
      'api::post.post'
    >;
  };
}

export interface BlogPostSelecation extends Schema.Component {
  collectionName: 'components_blog_post_selecations';
  info: {
    displayName: 'PostSelecation';
    icon: 'grid';
  };
  attributes: {
    tags: Attribute.Relation<
      'blog.post-selecation',
      'oneToMany',
      'api::tag.tag'
    >;
    SelectionHeading: Attribute.String;
  };
}

export interface LayoutButton extends Schema.Component {
  collectionName: 'components_layout_buttons';
  info: {
    displayName: 'Button';
    icon: 'typhoon';
  };
  attributes: {
    Label: Attribute.String & Attribute.Required;
    Link: Attribute.String & Attribute.Required;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'HeroSection';
    icon: 'monitor';
  };
  attributes: {
    Images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true> &
      Attribute.Required;
    CallToAction: Attribute.String & Attribute.Required;
    Buttons: Attribute.Component<'layout.button', true>;
  };
}

export interface SeoSeoInformation extends Schema.Component {
  collectionName: 'components_seo_seo_informations';
  info: {
    displayName: 'SeoInformation';
    icon: 'grid';
  };
  attributes: {
    SeoTitle: Attribute.String;
    SeoDescription: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog.featured-post': BlogFeaturedPost;
      'blog.post-selecation': BlogPostSelecation;
      'layout.button': LayoutButton;
      'layout.hero-section': LayoutHeroSection;
      'seo.seo-information': SeoSeoInformation;
    }
  }
}
