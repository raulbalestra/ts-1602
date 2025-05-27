import type { Schema, Struct } from '@strapi/strapi';

export interface AchievementConditions extends Struct.ComponentSchema {
  collectionName: 'components_achievement_conditions';
  info: {
    description: '';
    displayName: 'conditions';
  };
  attributes: {
    classCompletionCount: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    classDifficulty: Schema.Attribute.Enumeration<
      ['ENTRY', 'BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'ALL']
    >;
    classDuration: Schema.Attribute.Component<'achievement.duration', false>;
    classGoal: Schema.Attribute.Enumeration<
      [
        'FLEXIBILITY',
        'STRENGTH',
        'ENDURANCE',
        'MINDFULNESS',
        'WEIGHT_LOSS',
        'ALL',
      ]
    >;
    classType: Schema.Attribute.Enumeration<
      [
        'CARDIO',
        'FITNESS',
        'PILATES',
        'MEDITATION',
        'STRETCHING',
        'STRENGTH_TRAINING',
        'YOGA',
        'ALL',
      ]
    >;
    streakRequirement: Schema.Attribute.Component<
      'achievement.streak-requirements',
      false
    >;
    timeframeInDays: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface AchievementDuration extends Struct.ComponentSchema {
  collectionName: 'components_achievement_durations';
  info: {
    displayName: 'Duration';
  };
  attributes: {
    durationAmount: Schema.Attribute.Integer;
    durationOperator: Schema.Attribute.Enumeration<['UNDER', 'OVER', 'EQUALS']>;
  };
}

export interface AchievementStreakRequirements extends Struct.ComponentSchema {
  collectionName: 'components_achievement_streak_requirements';
  info: {
    displayName: 'Streak Requirements';
  };
  attributes: {
    streakCount: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    streakType: Schema.Attribute.Enumeration<['DAILY', 'WEEKLY', 'MONTHLY']>;
  };
}

export interface BlogBlogContent extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_contents';
  info: {
    description: '';
    displayName: 'meta';
    icon: 'code';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    socialDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    socialImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    socialTitle: Schema.Attribute.String & Schema.Attribute.Required;
    socialType: Schema.Attribute.Enumeration<['website', 'article']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'website'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlogBlogTest extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_tests';
  info: {
    description: '';
    displayName: 'richText';
    icon: 'underline';
  };
  attributes: {
    richText: Schema.Attribute.Blocks;
  };
}

export interface BlogRichTextMd extends Struct.ComponentSchema {
  collectionName: 'components_blog_rich_text_mds';
  info: {
    displayName: 'richTextMd';
    icon: 'crown';
  };
  attributes: {
    richTextMd: Schema.Attribute.RichText;
  };
}

export interface ClassVideoSection extends Struct.ComponentSchema {
  collectionName: 'components_class_video_sections';
  info: {
    displayName: 'Video Section';
  };
  attributes: {
    end: Schema.Attribute.Integer & Schema.Attribute.Required;
    start: Schema.Attribute.Integer & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface CommonFaq extends Struct.ComponentSchema {
  collectionName: 'components_common_faqs';
  info: {
    description: '';
    displayName: 'QnA';
    icon: 'bulletList';
  };
  attributes: {
    answerMd: Schema.Attribute.RichText;
    question: Schema.Attribute.String;
  };
}

export interface CommonImage extends Struct.ComponentSchema {
  collectionName: 'components_common_images';
  info: {
    description: '';
    displayName: 'image';
  };
  attributes: {
    alt: Schema.Attribute.String;
    src: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface CommonKeyValuePair extends Struct.ComponentSchema {
  collectionName: 'components_common_key_value_pairs';
  info: {
    displayName: 'key value pair';
  };
  attributes: {
    key: Schema.Attribute.String;
    value: Schema.Attribute.Text;
  };
}

export interface CommonMedia extends Struct.ComponentSchema {
  collectionName: 'components_common_media';
  info: {
    description: '';
    displayName: 'Media';
    icon: 'picture';
  };
  attributes: {
    linkUrl: Schema.Attribute.String;
    mediaFile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CommonMetadata extends Struct.ComponentSchema {
  collectionName: 'components_common_metadata';
  info: {
    description: '';
    displayName: 'Metadata';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    socialDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    socialImage: Schema.Attribute.Media<'images'>;
    socialTitle: Schema.Attribute.Text & Schema.Attribute.Required;
    socialType: Schema.Attribute.Enumeration<['website', 'article']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'website'>;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface CommonString extends Struct.ComponentSchema {
  collectionName: 'components_common_strings';
  info: {
    displayName: 'string';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeBenefit extends Struct.ComponentSchema {
  collectionName: 'components_home_benefits';
  info: {
    description: '';
    displayName: 'Benefit';
  };
  attributes: {
    firstBenefitSubtitle: Schema.Attribute.Text;
    firstBenefitTitle: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    secondBenefitSubtitle: Schema.Attribute.Text;
    secondBenefitTitle: Schema.Attribute.String;
    thirdBenefitSubtitle: Schema.Attribute.Text;
    thirdBenefitTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    whiteTheme: Schema.Attribute.Boolean;
  };
}

export interface HomeBenefitsSection extends Struct.ComponentSchema {
  collectionName: 'components_home_benefits_sections';
  info: {
    description: '';
    displayName: 'BenefitsSection';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'home.benefit', true>;
  };
}

export interface HomeBottomHeroPart extends Struct.ComponentSchema {
  collectionName: 'components_home_bottom_hero_parts';
  info: {
    description: '';
    displayName: 'BottomHeroPart';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    secondTitle: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeBottomHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_home_bottom_hero_sections';
  info: {
    description: '';
    displayName: 'BottomHeroSection';
  };
  attributes: {
    bottomHeroParts: Schema.Attribute.Component<'home.bottom-hero-part', true>;
    buttonLink: Schema.Attribute.String;
    buttonSubtitle: Schema.Attribute.String;
    buttonTitle: Schema.Attribute.String;
  };
}

export interface HomeContactUsSection extends Struct.ComponentSchema {
  collectionName: 'components_home_contact_us_sections';
  info: {
    description: '';
    displayName: 'ContactUsSection';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonTitle: Schema.Attribute.String;
    contactUsImage: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeFaq extends Struct.ComponentSchema {
  collectionName: 'components_home_faqs';
  info: {
    description: '';
    displayName: 'Faq';
  };
  attributes: {
    answerMd: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface HomeFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_home_faq_sections';
  info: {
    displayName: 'FaqSection';
  };
  attributes: {
    faqParts: Schema.Attribute.Component<'home.faq', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_sections';
  info: {
    description: '';
    displayName: 'HeroSection';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images'>;
    buttonLink: Schema.Attribute.String;
    buttonSubtitle: Schema.Attribute.String;
    buttonTitle: Schema.Attribute.String;
    ratedTextEnd: Schema.Attribute.String;
    ratedTextStart: Schema.Attribute.String;
    rating: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeMoreBenefitsSection extends Struct.ComponentSchema {
  collectionName: 'components_home_more_benefits_sections';
  info: {
    description: '';
    displayName: 'MoreBenefitsSection';
  };
  attributes: {
    smallBenefits: Schema.Attribute.Component<'home.small-benefits', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeResult extends Struct.ComponentSchema {
  collectionName: 'components_home_results';
  info: {
    description: '';
    displayName: 'Result';
  };
  attributes: {
    authorImage: Schema.Attribute.Media<'images'>;
    authorName: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    profession: Schema.Attribute.String;
  };
}

export interface HomeResultsSection extends Struct.ComponentSchema {
  collectionName: 'components_home_results_sections';
  info: {
    description: '';
    displayName: 'ResultsSection';
  };
  attributes: {
    results: Schema.Attribute.Component<'home.result', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeSecondHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_home_second_hero_sections';
  info: {
    description: '';
    displayName: 'SecondHeroSection';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonSubtitle: Schema.Attribute.String;
    buttonTitle: Schema.Attribute.String;
    secondHeroImage: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeSeenOnTheNewsSection extends Struct.ComponentSchema {
  collectionName: 'components_home_seen_on_the_news_sections';
  info: {
    description: '';
    displayName: 'SeenOnTheNewsSection';
  };
  attributes: {
    asSeenOnImage: Schema.Attribute.Media<'images'>;
    heroTextBg: Schema.Attribute.Media<'images'>;
    mainNewsImage: Schema.Attribute.Media<'images'>;
    quoteTitle: Schema.Attribute.String;
  };
}

export interface HomeSmallBenefits extends Struct.ComponentSchema {
  collectionName: 'components_home_small_benefits';
  info: {
    description: '';
    displayName: 'SmallBenefits';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeSocialMediaTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_home_social_media_testimonials';
  info: {
    description: '';
    displayName: 'SocialMediaTestimonial';
  };
  attributes: {
    authorImage: Schema.Attribute.Media<'images'>;
    authorName: Schema.Attribute.String;
    date: Schema.Attribute.String;
    description: Schema.Attribute.String;
    mediaSource: Schema.Attribute.String & Schema.Attribute.Required;
    withRating: Schema.Attribute.Boolean;
  };
}

export interface HomeSocialMediaTestimonialsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_home_social_media_testimonials_sections';
  info: {
    description: '';
    displayName: 'SocialMediaTestimonialsSection';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonSubtitle: Schema.Attribute.String;
    buttonTitle: Schema.Attribute.String;
    socialMediaTestimonials: Schema.Attribute.Component<
      'home.social-media-testimonial',
      true
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeTestimonialVideoSection extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonial_video_sections';
  info: {
    displayName: 'TestimonialVideoSection';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonials';
  info: {
    description: '';
    displayName: 'Testimonial';
  };
  attributes: {
    authorName: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    skills: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeTestimonialsSection extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonials_sections';
  info: {
    description: '';
    displayName: 'TestimonialsSection';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonSubtitle: Schema.Attribute.String;
    buttonTitle: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'home.testimonials', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeWorkoutProgram extends Struct.ComponentSchema {
  collectionName: 'components_home_workout_programs';
  info: {
    description: '';
    displayName: 'WorkoutProgram';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeWorkoutProgramsSection extends Struct.ComponentSchema {
  collectionName: 'components_home_workout_programs_sections';
  info: {
    description: '';
    displayName: 'workoutProgramsSection';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    workout: Schema.Attribute.Component<'home.workout-program', true>;
  };
}

export interface NavigationNavigationItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_navigation_items';
  info: {
    description: '';
    displayName: 'NavigationLinks';
  };
  attributes: {
    blog: Schema.Attribute.String & Schema.Attribute.Required;
    login: Schema.Attribute.String & Schema.Attribute.Required;
    logout: Schema.Attribute.String & Schema.Attribute.Required;
    memberAreaBlog: Schema.Attribute.String & Schema.Attribute.Required;
    memberAreaHome: Schema.Attribute.String & Schema.Attribute.Required;
    memberAreaSettings: Schema.Attribute.String & Schema.Attribute.Required;
    reviews: Schema.Attribute.String & Schema.Attribute.Required;
    signup: Schema.Attribute.String & Schema.Attribute.Required;
    whatsIncluded: Schema.Attribute.String & Schema.Attribute.Required;
    workoutPrograms: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PopupButton extends Struct.ComponentSchema {
  collectionName: 'components_popup_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface PopupCloseButton extends Struct.ComponentSchema {
  collectionName: 'components_popup_close_buttons';
  info: {
    displayName: 'closeButton';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface PopupMedia extends Struct.ComponentSchema {
  collectionName: 'components_popup_media';
  info: {
    displayName: 'media';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PopupRating extends Struct.ComponentSchema {
  collectionName: 'components_popup_ratings';
  info: {
    displayName: 'rating';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface PopupSubParagraph extends Struct.ComponentSchema {
  collectionName: 'components_popup_sub_paragraphs';
  info: {
    displayName: 'subParagraph';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface PopupSubTitle extends Struct.ComponentSchema {
  collectionName: 'components_popup_sub_titles';
  info: {
    description: '';
    displayName: 'subTitle';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface PopupTitle extends Struct.ComponentSchema {
  collectionName: 'components_popup_titles';
  info: {
    description: '';
    displayName: 'title';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface PricingPlanPriceFeatures extends Struct.ComponentSchema {
  collectionName: 'components_pricing_plan_price_features';
  info: {
    description: '';
    displayName: 'Features';
  };
  attributes: {
    feature: Schema.Attribute.Enumeration<
      [
        'hair',
        'skin',
        'vision',
        'meditation',
        'booty_challenge',
        'abs_challenge',
        'beautiful_skin_ebook',
        'sofa_yoga_ebook',
        'eye_yoga_ebook',
        'yoga_detox_ebook',
        'easy_keto_ebook',
        'radiant_youth_hypnotherapy',
        'weight_loss_hypnotherapy',
        'gut_reset_ebook',
        'superfoods_ebook',
        'menstrual_ebook',
        'gut_health_ebook',
      ]
    >;
  };
}

export interface ProgramDiifficulty extends Struct.ComponentSchema {
  collectionName: 'components_program_diifficulties';
  info: {
    description: '';
    displayName: 'Difficulty';
  };
  attributes: {
    name: Schema.Attribute.Enumeration<
      ['Entry level', 'beginner', 'Intermediate', 'Advanced', 'All levels']
    >;
  };
}

export interface ProgramEquipment extends Struct.ComponentSchema {
  collectionName: 'components_program_equipment';
  info: {
    displayName: 'Equipment';
  };
  attributes: {
    equipment: Schema.Attribute.Enumeration<['CHAIR', 'NONE']>;
  };
}

export interface ProgramGoals extends Struct.ComponentSchema {
  collectionName: 'components_program_goals';
  info: {
    description: '';
    displayName: 'Goals';
  };
  attributes: {
    goal: Schema.Attribute.Enumeration<
      [
        'FLEXIBILITY',
        'STRENGTH',
        'ENDURANCE',
        'MINDFULNESS',
        'WEIGHT_LOSS',
        'ALL',
      ]
    >;
  };
}

export interface ProgramIntensity extends Struct.ComponentSchema {
  collectionName: 'components_program_intensities';
  info: {
    description: '';
    displayName: 'Intensity';
  };
  attributes: {
    intensity: Schema.Attribute.Enumeration<
      ['MEDIUM', 'LOW_MEDIUM', 'MEDIUM_HIGH']
    >;
  };
}

export interface ProgramMovementPattern extends Struct.ComponentSchema {
  collectionName: 'components_program_movement_patterns';
  info: {
    description: '';
    displayName: 'Movement Pattern';
  };
  attributes: {
    movementPattern: Schema.Attribute.Enumeration<['FULL_BODY', 'LOWER_BODY']>;
  };
}

export interface ProgramPrimaryMuscleGroup extends Struct.ComponentSchema {
  collectionName: 'components_program_primary_muscle_groups';
  info: {
    description: '';
    displayName: 'Primary Muscle Group';
  };
  attributes: {
    primaryMuscleGroup: Schema.Attribute.Enumeration<
      [
        'FULL_BODY',
        'LEGS',
        'GLUTES',
        'CORE',
        'CALVES',
        'SHOULDERS',
        'HIP_ABDUCTORS',
        'HIP_ROTATORS',
        'ADDUCTORS',
        'HAMSTRINGS',
        'QUADRICEPS',
      ]
    >;
  };
}

export interface ProgramProgramLength extends Struct.ComponentSchema {
  collectionName: 'components_program_program_lengths';
  info: {
    description: '';
    displayName: 'Program Length';
  };
  attributes: {
    roundedLengthInMinutes: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface ProgramProgramType extends Struct.ComponentSchema {
  collectionName: 'components_program_program_types';
  info: {
    description: '';
    displayName: 'Program Type';
  };
  attributes: {
    type: Schema.Attribute.Enumeration<
      [
        'CARDIO',
        'FITNESS',
        'PILATES',
        'MEDITATION',
        'STRETCHING',
        'STRENGTH_TRAINING',
        'YOGA',
        'ALL',
      ]
    >;
  };
}

export interface ProgramRiskArea extends Struct.ComponentSchema {
  collectionName: 'components_program_risk_areas';
  info: {
    description: '';
    displayName: 'Risk Area';
  };
  attributes: {
    riskArea: Schema.Attribute.Enumeration<
      [
        'NECK',
        'BACK',
        'SHOULDERS',
        'KNEES',
        'ANKLES',
        'HIPS',
        'LOWER_BACK',
        'WRISTS',
      ]
    >;
  };
}

export interface ProgramSecondaryMuscleGroup extends Struct.ComponentSchema {
  collectionName: 'components_program_secondary_muscle_groups';
  info: {
    description: '';
    displayName: 'Secondary Muscle Group';
  };
  attributes: {
    secondaryMuscleGroup: Schema.Attribute.Enumeration<
      [
        'CORE',
        'LEGS',
        'ARMS',
        'CALVES',
        'HIP_ABDUCTORS',
        'SHOULDERS',
        'FEET',
        'LOWER_BACK',
        'GLUTES',
        'HAMSTRINGS',
        'ADDUCTORS',
        'HIP_FLEXORS',
      ]
    >;
  };
}

export interface ProgramSkillPointsPerClass extends Struct.ComponentSchema {
  collectionName: 'components_program_skill_points_per_classes';
  info: {
    description: '';
    displayName: 'Skill Points Per Class';
  };
  attributes: {
    name: Schema.Attribute.Enumeration<
      ['STRENGTH', 'FLEXIBILITY', 'ENDURANCE', 'MINDFULNESS']
    > &
      Schema.Attribute.Required;
    points: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface PromotionsAsSeenOnSection extends Struct.ComponentSchema {
  collectionName: 'components_promotions_as_seen_on_sections';
  info: {
    displayName: 'AsSeenOnSection';
  };
  attributes: {
    asSeenOn: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PromotionsBenefit extends Struct.ComponentSchema {
  collectionName: 'components_promotions_benefits';
  info: {
    displayName: 'benefit';
  };
  attributes: {
    alt: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PromotionsBenefitsSection extends Struct.ComponentSchema {
  collectionName: 'components_promotions_benefits_sections';
  info: {
    description: '';
    displayName: 'BenefitsSection';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'promotions.benefit', true> &
      Schema.Attribute.Required;
    femaleImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    maleImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PromotionsBodyImages extends Struct.ComponentSchema {
  collectionName: 'components_promotions_body_images';
  info: {
    description: '';
    displayName: 'bodyImages';
  };
  attributes: {
    fat: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    gender: Schema.Attribute.String & Schema.Attribute.Required;
    thin: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    toned: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface PromotionsDiscount extends Struct.ComponentSchema {
  collectionName: 'components_promotions_discounts';
  info: {
    displayName: 'discount';
  };
  attributes: {
    duration: Schema.Attribute.Integer;
    expiresIn: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PromotionsFreebie extends Struct.ComponentSchema {
  collectionName: 'components_promotions_freebies';
  info: {
    displayName: 'freebie';
  };
  attributes: {
    alt: Schema.Attribute.String;
    free: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    included: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.Decimal & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PromotionsFreebiesSection extends Struct.ComponentSchema {
  collectionName: 'components_promotions_freebies_sections';
  info: {
    description: '';
    displayName: 'FreebiesSection';
  };
  attributes: {
    clientTestimonial: Schema.Attribute.String & Schema.Attribute.Required;
    freebies: Schema.Attribute.Component<'promotions.freebie', true> &
      Schema.Attribute.Required;
    getPlan: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PromotionsGuaranteeSection extends Struct.ComponentSchema {
  collectionName: 'components_promotions_guarantee_sections';
  info: {
    description: '';
    displayName: 'GuaranteeSection';
  };
  attributes: {
    content: Schema.Attribute.Text;
    getPlan: Schema.Attribute.String;
    linkText: Schema.Attribute.String;
    rated: Schema.Attribute.Text;
    ratedSubnote: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PromotionsHeader extends Struct.ComponentSchema {
  collectionName: 'components_promotions_headers';
  info: {
    description: '';
    displayName: 'header';
    icon: 'layout';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgImage: Schema.Attribute.Media<'images'>;
    buttonTitle: Schema.Attribute.String & Schema.Attribute.Required;
    duration: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    image1: Schema.Attribute.Media<'images'>;
    image2: Schema.Attribute.Media<'images'>;
    image3: Schema.Attribute.Media<'images'>;
    ratingTextEnd: Schema.Attribute.Text & Schema.Attribute.Required;
    ratingTextStart: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PromotionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_promotions_hero_sections';
  info: {
    description: '';
    displayName: 'HeroSection';
  };
  attributes: {
    agreement: Schema.Attribute.String & Schema.Attribute.Required;
    attractiveness: Schema.Attribute.String & Schema.Attribute.Required;
    autoRenewal: Schema.Attribute.String & Schema.Attribute.Required;
    discount: Schema.Attribute.Component<'promotions.discount', false>;
    flexibility: Schema.Attribute.String & Schema.Attribute.Required;
    foxReview: Schema.Attribute.String & Schema.Attribute.Required;
    getPlan: Schema.Attribute.String & Schema.Attribute.Required;
    heroImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    heroImageMobile: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    loseWeight: Schema.Attribute.String & Schema.Attribute.Required;
    personalPlan: Schema.Attribute.String & Schema.Attribute.Required;
    personalPlanLoss: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Lose {{loss}} with your personal plan'>;
    priceCards: Schema.Attribute.Component<'promotions.price-card', true> &
      Schema.Attribute.Required;
    rated: Schema.Attribute.String & Schema.Attribute.Required;
    reduceFat: Schema.Attribute.String & Schema.Attribute.Required;
    safeCheckout: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PromotionsImageCarouselSection extends Struct.ComponentSchema {
  collectionName: 'components_promotions_image_carousel_sections';
  info: {
    displayName: 'ImageCarouselSection';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PromotionsInTheMediaSection extends Struct.ComponentSchema {
  collectionName: 'components_promotions_in_the_media_sections';
  info: {
    displayName: 'InTheMediaSection';
  };
  attributes: {
    alt: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PromotionsIntroduction extends Struct.ComponentSchema {
  collectionName: 'components_promotions_introductions';
  info: {
    description: '';
    displayName: 'Introduction';
  };
  attributes: {
    gender: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    video: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
  };
}

export interface PromotionsMediaReactionImage extends Struct.ComponentSchema {
  collectionName: 'components_promotions_media_reaction_images';
  info: {
    displayName: 'MediaReactionImage';
  };
  attributes: {
    gender: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface PromotionsMediaReactionsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_promotions_media_reactions_sections';
  info: {
    description: '';
    displayName: 'MediaReactionsSection';
  };
  attributes: {
    button: Schema.Attribute.String & Schema.Attribute.Required;
    genderedImages: Schema.Attribute.Component<
      'promotions.media-reaction-image',
      true
    >;
    images: Schema.Attribute.Component<'common.image', true> &
      Schema.Attribute.Required;
    rated: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PromotionsPersonalProgramSection
  extends Struct.ComponentSchema {
  collectionName: 'components_promotions_personal_program_sections';
  info: {
    displayName: 'PersonalProgramSection';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    includedItems: Schema.Attribute.Component<'common.string', true> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PromotionsPitch3FromToSection extends Struct.ComponentSchema {
  collectionName: 'components_promotions_pitch3_from_to_sections';
  info: {
    description: '';
    displayName: 'Pitch3FromToSection';
  };
  attributes: {
    afterSubtitle: Schema.Attribute.String & Schema.Attribute.Required;
    beforeSubtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    bmiString1: Schema.Attribute.String & Schema.Attribute.Required;
    bmiString2: Schema.Attribute.String & Schema.Attribute.Required;
    bmiString3: Schema.Attribute.String & Schema.Attribute.Required;
    bmiString4: Schema.Attribute.String & Schema.Attribute.Required;
    bodyImages: Schema.Attribute.Component<'promotions.body-images', true> &
      Schema.Attribute.Required;
    now: Schema.Attribute.String & Schema.Attribute.Required;
    phrases: Schema.Attribute.Component<'quiz.shared-pitch', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    yourGoal: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PromotionsPitch3GraphSection extends Struct.ComponentSchema {
  collectionName: 'components_promotions_pitch3_graph_sections';
  info: {
    displayName: 'Pitch3GraphSection';
  };
  attributes: {
    and: Schema.Attribute.String & Schema.Attribute.Required;
    bodyChange: Schema.Attribute.String & Schema.Attribute.Required;
    gain: Schema.Attribute.String & Schema.Attribute.Required;
    goal: Schema.Attribute.String & Schema.Attribute.Required;
    graphDisclaimer: Schema.Attribute.String & Schema.Attribute.Required;
    lose: Schema.Attribute.String & Schema.Attribute.Required;
    now: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle1: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle2: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PromotionsPotentialSavingsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_promotions_potential_savings_sections';
  info: {
    displayName: 'PotentialSavingsSection';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    monthlyPriceText: Schema.Attribute.String & Schema.Attribute.Required;
    monthlyPriceValue: Schema.Attribute.String & Schema.Attribute.Required;
    savings: Schema.Attribute.Component<'promotions.saving', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    totalValueText: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PromotionsPriceCard extends Struct.ComponentSchema {
  collectionName: 'components_promotions_price_cards';
  info: {
    displayName: 'priceCard';
  };
  attributes: {
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    flair: Schema.Attribute.String;
    newPerDayPrice: Schema.Attribute.Decimal & Schema.Attribute.Required;
    newPrice: Schema.Attribute.Decimal & Schema.Attribute.Required;
    oldPerDayPrice: Schema.Attribute.Decimal & Schema.Attribute.Required;
    oldPrice: Schema.Attribute.Decimal & Schema.Attribute.Required;
    perDayText: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['primary', 'secondary', 'default']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface PromotionsProductComparisonSection
  extends Struct.ComponentSchema {
  collectionName: 'components_promotions_product_comparison_sections';
  info: {
    displayName: 'ProductComparisonSection';
  };
  attributes: {
    title: Schema.Attribute.Text;
  };
}

export interface PromotionsPromotionBanner extends Struct.ComponentSchema {
  collectionName: 'components_promotions_promotion_banners';
  info: {
    displayName: 'PromotionBanner';
  };
  attributes: {
    buttonTitle: Schema.Attribute.String & Schema.Attribute.Required;
    duration: Schema.Attribute.Integer & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PromotionsReview extends Struct.ComponentSchema {
  collectionName: 'components_promotions_reviews';
  info: {
    description: '';
    displayName: 'review';
  };
  attributes: {
    date: Schema.Attribute.String & Schema.Attribute.Required;
    gender: Schema.Attribute.String & Schema.Attribute.Required;
    platformAlt: Schema.Attribute.String;
    platformIcon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    profileAlt: Schema.Attribute.String;
    profileIcon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    review: Schema.Attribute.Text & Schema.Attribute.Required;
    username: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PromotionsSaving extends Struct.ComponentSchema {
  collectionName: 'components_promotions_savings';
  info: {
    displayName: 'saving';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PromotionsSlidingTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_promotions_sliding_testimonials';
  info: {
    description: '';
    displayName: 'SlidingTestimonial';
  };
  attributes: {
    bodyImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    isFemale: Schema.Attribute.Boolean & Schema.Attribute.Required;
    name: Schema.Attribute.String;
    profileImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    rating: Schema.Attribute.Decimal & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface PromotionsSlidingTestimonialsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_promotions_sliding_testimonials_sections';
  info: {
    description: '';
    displayName: 'SlidingTestimonialsSection';
  };
  attributes: {
    slidingTestimonials: Schema.Attribute.Component<
      'promotions.sliding-testimonial',
      true
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface PromotionsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_promotions_testimonials';
  info: {
    description: '';
    displayName: 'testimonial';
  };
  attributes: {
    alt: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    duration: Schema.Attribute.String & Schema.Attribute.Required;
    gender: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface PromotionsTestimonialVideoSection
  extends Struct.ComponentSchema {
  collectionName: 'components_promotions_testimonial_video_sections';
  info: {
    displayName: 'TestimonialVideoSection';
  };
  attributes: {
    getPlan: Schema.Attribute.String & Schema.Attribute.Required;
    points: Schema.Attribute.Component<'common.string', true> &
      Schema.Attribute.Required;
    rated: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    video: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
    videoTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PromotionsTestimonialsSection extends Struct.ComponentSchema {
  collectionName: 'components_promotions_testimonials_sections';
  info: {
    description: '';
    displayName: 'TestimonialsSection';
  };
  attributes: {
    maleTitle: Schema.Attribute.Text;
    testimonials: Schema.Attribute.Component<'promotions.testimonial', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface PromotionsUserReviewsSection extends Struct.ComponentSchema {
  collectionName: 'components_promotions_user_reviews_sections';
  info: {
    description: '';
    displayName: 'UserReviewsSection';
  };
  attributes: {
    reviews: Schema.Attribute.Component<'promotions.review', true> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PromotionsWhatUsersSaySection extends Struct.ComponentSchema {
  collectionName: 'components_promotions_what_users_say_sections';
  info: {
    description: '';
    displayName: 'WhatUsersSaySection';
  };
  attributes: {
    button: Schema.Attribute.String & Schema.Attribute.Required;
    femaleVideo: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
    maleVideo: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
    rated: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface QuizAnswer extends Struct.ComponentSchema {
  collectionName: 'components_quiz_answers';
  info: {
    description: '';
    displayName: 'answer';
  };
  attributes: {
    emoji: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    skipNextStep: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subtext: Schema.Attribute.String;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuizAnswerMulti extends Struct.ComponentSchema {
  collectionName: 'components_quiz_answer_multis';
  info: {
    description: '';
    displayName: 'AnswerMulti';
    icon: 'bulletList';
  };
  attributes: {
    emoji: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isAtomic: Schema.Attribute.Boolean;
    subtext: Schema.Attribute.String;
    text: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface QuizBodyImages extends Struct.ComponentSchema {
  collectionName: 'components_quiz_body_images';
  info: {
    description: '';
    displayName: 'bodyImages';
  };
  attributes: {
    fat: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    gender: Schema.Attribute.String & Schema.Attribute.Required;
    thin: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    toned: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface QuizCommonStep extends Struct.ComponentSchema {
  collectionName: 'components_quiz_common_steps';
  info: {
    description: '';
    displayName: 'commonStep';
    icon: 'chartCircle';
  };
  attributes: {
    property: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface QuizEmailCapture extends Struct.ComponentSchema {
  collectionName: 'components_quiz_email_captures';
  info: {
    description: '';
    displayName: 'emailCapture';
  };
  attributes: {
    defaultLoss: Schema.Attribute.Decimal & Schema.Attribute.Required;
    emailInputPlaceholder: Schema.Attribute.String & Schema.Attribute.Required;
    emailInputSubmitButtonTitle: Schema.Attribute.String &
      Schema.Attribute.Required;
    informationSecure: Schema.Attribute.Text & Schema.Attribute.Required;
    phoneImage: Schema.Attribute.Media<'images'>;
    phoneInputPlaceholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Phone Number'>;
    phoneInputSkipButtonTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'I prefer not to say'>;
    phoneInputSubmitButtonTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Continue'>;
    phoneTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Last Step! Sign up for SMS'>;
    privacyPolicy: Schema.Attribute.Text & Schema.Attribute.Required;
    ratedText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Excellent'>;
    ratedTextEnd: Schema.Attribute.String & Schema.Attribute.Required;
    ratedTextStart: Schema.Attribute.String & Schema.Attribute.Required;
    rating: Schema.Attribute.Decimal & Schema.Attribute.Required;
    subtitleEnd: Schema.Attribute.String & Schema.Attribute.Required;
    subtitleStart: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    useSmsCapture: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    validationEmailAlt: Schema.Attribute.String & Schema.Attribute.Required;
    validationEmailIncorrect: Schema.Attribute.String &
      Schema.Attribute.Required;
    validationPhoneIncorrect: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Phone number is invalid'>;
    validationPhoneRequired: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Phone number is required'>;
  };
}

export interface QuizFooter extends Struct.ComponentSchema {
  collectionName: 'components_quiz_footers';
  info: {
    description: '';
    displayName: 'footer';
  };
  attributes: {
    asSeenOn: Schema.Attribute.String & Schema.Attribute.Required;
    informationSecure: Schema.Attribute.String & Schema.Attribute.Required;
    selectLanguage: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuizHeader extends Struct.ComponentSchema {
  collectionName: 'components_quiz_headers';
  info: {
    description: '';
    displayName: 'header';
  };
  attributes: {
    review: Schema.Attribute.String & Schema.Attribute.Required;
    slider: Schema.Attribute.Component<'quiz.header-slider', false>;
  };
}

export interface QuizHeaderSlider extends Struct.ComponentSchema {
  collectionName: 'components_quiz_header_sliders';
  info: {
    description: '';
    displayName: 'HeaderSlider';
  };
  attributes: {
    text1: Schema.Attribute.String & Schema.Attribute.Required;
    text2: Schema.Attribute.String & Schema.Attribute.Required;
    text3: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuizPromotionBanner extends Struct.ComponentSchema {
  collectionName: 'components_quiz_promotion_banners';
  info: {
    displayName: 'promotionBanner';
    icon: 'message';
  };
  attributes: {
    countdown: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<900>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuizShared extends Struct.ComponentSchema {
  collectionName: 'components_quiz_shareds';
  info: {
    description: '';
    displayName: 'shared';
    icon: 'archive';
  };
  attributes: {
    continueButton: Schema.Attribute.String & Schema.Attribute.Required;
    sharedPitch: Schema.Attribute.Component<'quiz.shared-pitch', false> &
      Schema.Attribute.Required;
    warningBox: Schema.Attribute.Component<'quiz.warning-box', false> &
      Schema.Attribute.Required;
  };
}

export interface QuizSharedPitch extends Struct.ComponentSchema {
  collectionName: 'components_quiz_shared_pitches';
  info: {
    displayName: 'sharedPitch';
  };
  attributes: {
    bodyFatDangerous: Schema.Attribute.String & Schema.Attribute.Required;
    bodyFatHigh: Schema.Attribute.String & Schema.Attribute.Required;
    bodyFatLow: Schema.Attribute.String & Schema.Attribute.Required;
    bodyFatNormal: Schema.Attribute.String & Schema.Attribute.Required;
    bodyFatTitle: Schema.Attribute.String & Schema.Attribute.Required;
    bodyTypeEctomorph: Schema.Attribute.String & Schema.Attribute.Required;
    bodyTypeEndomorph: Schema.Attribute.String & Schema.Attribute.Required;
    bodyTypeMesomorph: Schema.Attribute.String & Schema.Attribute.Required;
    bodyTypeTitle: Schema.Attribute.String & Schema.Attribute.Required;
    fitnessLevelAdvanced: Schema.Attribute.String & Schema.Attribute.Required;
    fitnessLevelBeginner: Schema.Attribute.String & Schema.Attribute.Required;
    fitnessLevelIntermediate: Schema.Attribute.String &
      Schema.Attribute.Required;
    fitnessLevelTitle: Schema.Attribute.String & Schema.Attribute.Required;
    hormonalBalanceGood: Schema.Attribute.String & Schema.Attribute.Required;
    hormonalBalanceIntermediate: Schema.Attribute.String &
      Schema.Attribute.Required;
    hormonalBalancePoor: Schema.Attribute.String & Schema.Attribute.Required;
    hormonalBalanceTitle: Schema.Attribute.String & Schema.Attribute.Required;
    lifestyleActive: Schema.Attribute.String & Schema.Attribute.Required;
    lifestyleBalanced: Schema.Attribute.String & Schema.Attribute.Required;
    lifestyleSedentary: Schema.Attribute.String & Schema.Attribute.Required;
    lifestyleTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metabolismFast: Schema.Attribute.String & Schema.Attribute.Required;
    metabolismNormal: Schema.Attribute.String & Schema.Attribute.Required;
    metabolismSlow: Schema.Attribute.String & Schema.Attribute.Required;
    metabolismTitle: Schema.Attribute.String & Schema.Attribute.Required;
    muscleDensityHigh: Schema.Attribute.String & Schema.Attribute.Required;
    muscleDensityLow: Schema.Attribute.String & Schema.Attribute.Required;
    muscleDensityMedium: Schema.Attribute.String & Schema.Attribute.Required;
    muscleDensityTitle: Schema.Attribute.String & Schema.Attribute.Required;
    productExperienceAdvanced: Schema.Attribute.String &
      Schema.Attribute.Required;
    productExperienceBeginner: Schema.Attribute.String &
      Schema.Attribute.Required;
    productExperienceIntermediate: Schema.Attribute.String &
      Schema.Attribute.Required;
    productExperienceTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuizSliderInterval extends Struct.ComponentSchema {
  collectionName: 'components_quiz_slider_intervals';
  info: {
    description: '';
    displayName: 'sliderPoint';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    point: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface QuizSocialMediaTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_quiz_social_media_testimonials';
  info: {
    displayName: 'socialMediaTestimonial';
  };
  attributes: {
    author: Schema.Attribute.Text & Schema.Attribute.Required;
    avatar: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    beforeAfter: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<
      ['facebook', 'instagram', 'trustpilot']
    > &
      Schema.Attribute.Required;
  };
}

export interface QuizStepAge extends Struct.ComponentSchema {
  collectionName: 'components_quiz_step_ages';
  info: {
    description: '';
    displayName: 'stepAge';
  };
  attributes: {
    common: Schema.Attribute.Component<'quiz.common-step', false> &
      Schema.Attribute.Required;
    helper: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String;
  };
}

export interface QuizStepDate extends Struct.ComponentSchema {
  collectionName: 'components_quiz_step_dates';
  info: {
    description: '';
    displayName: 'stepDate';
  };
  attributes: {
    common: Schema.Attribute.Component<'quiz.common-step', false> &
      Schema.Attribute.Required;
    placeholder: Schema.Attribute.String & Schema.Attribute.Required;
    skipStep: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuizStepGender extends Struct.ComponentSchema {
  collectionName: 'components_quiz_step_genders';
  info: {
    description: '';
    displayName: 'stepGender';
  };
  attributes: {
    answers: Schema.Attribute.Component<'quiz.answer', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 2;
        },
        number
      >;
    common: Schema.Attribute.Component<'quiz.common-step', false> &
      Schema.Attribute.Required;
    notSay: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuizStepGoalWeight extends Struct.ComponentSchema {
  collectionName: 'components_quiz_step_goal_weights';
  info: {
    displayName: 'stepGoalWeight';
    icon: 'train';
  };
  attributes: {
    common: Schema.Attribute.Component<'quiz.common-step', false>;
    elseDescription: Schema.Attribute.Text;
    elseTitle: Schema.Attribute.String;
    gainWeightDescription: Schema.Attribute.Text;
    gainWeightTitle: Schema.Attribute.String;
    helper: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    underweightDescription: Schema.Attribute.Text;
    underweightTitle: Schema.Attribute.String;
  };
}

export interface QuizStepHeight extends Struct.ComponentSchema {
  collectionName: 'components_quiz_step_heights';
  info: {
    description: '';
    displayName: 'stepHeight';
  };
  attributes: {
    common: Schema.Attribute.Component<'quiz.common-step', false> &
      Schema.Attribute.Required;
    helper: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String;
  };
}

export interface QuizStepImage extends Struct.ComponentSchema {
  collectionName: 'components_quiz_step_images';
  info: {
    description: '';
    displayName: 'stepImage';
  };
  attributes: {
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    common: Schema.Attribute.Component<'quiz.common-step', false>;
    containerDescription: Schema.Attribute.Text;
    containerDescriptionMale: Schema.Attribute.Text;
    containerTitle: Schema.Attribute.String;
    containerTitleMale: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imageMale: Schema.Attribute.Media<'images'>;
  };
}

export interface QuizStepImageAnswers extends Struct.ComponentSchema {
  collectionName: 'components_quiz_step_image_answers';
  info: {
    description: '';
    displayName: 'stepImageAnswers';
    icon: 'grid';
  };
  attributes: {
    answers: Schema.Attribute.Component<'quiz.answer', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    answersMale: Schema.Attribute.Component<'quiz.answer', true>;
    common: Schema.Attribute.Component<'quiz.common-step', false>;
  };
}

export interface QuizStepLoading extends Struct.ComponentSchema {
  collectionName: 'components_quiz_step_loadings';
  info: {
    description: '';
    displayName: 'stepLoading';
  };
  attributes: {
    calculationsText: Schema.Attribute.Component<'common.string', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    common: Schema.Attribute.Component<'quiz.common-step', false> &
      Schema.Attribute.Required;
    emailCapture: Schema.Attribute.Component<'quiz.email-capture', false>;
    loadingDuration: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<10>;
    testimonials: Schema.Attribute.Component<
      'quiz.social-media-testimonial',
      true
    >;
  };
}

export interface QuizStepMultiChoice extends Struct.ComponentSchema {
  collectionName: 'components_quiz_step_multi_choices';
  info: {
    description: '';
    displayName: 'stepMultiChoice';
    icon: 'bulletList';
  };
  attributes: {
    answers: Schema.Attribute.Component<'quiz.answer-multi', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    answersMale: Schema.Attribute.Component<'quiz.answer-multi', true>;
    common: Schema.Attribute.Component<'quiz.common-step', false> &
      Schema.Attribute.Required;
  };
}

export interface QuizStepName extends Struct.ComponentSchema {
  collectionName: 'components_quiz_step_names';
  info: {
    description: '';
    displayName: 'stepName';
  };
  attributes: {
    common: Schema.Attribute.Component<'quiz.common-step', false> &
      Schema.Attribute.Required;
    placeholder: Schema.Attribute.String;
  };
}

export interface QuizStepPitch1 extends Struct.ComponentSchema {
  collectionName: 'components_quiz_step_pitch1s';
  info: {
    description: '';
    displayName: 'stepPitch1';
  };
  attributes: {
    bodyImages: Schema.Attribute.Component<'quiz.body-images', true>;
    common: Schema.Attribute.Component<'quiz.common-step', false> &
      Schema.Attribute.Required;
    imagesCaption: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuizStepPitch2 extends Struct.ComponentSchema {
  collectionName: 'components_quiz_step_pitch2s';
  info: {
    description: '';
    displayName: 'stepPitch2';
  };
  attributes: {
    bodyImages: Schema.Attribute.Component<'quiz.body-images', true>;
    bodyMassText: Schema.Attribute.String & Schema.Attribute.Required;
    continueTitle: Schema.Attribute.String;
    men: Schema.Attribute.String & Schema.Attribute.Required;
    normal: Schema.Attribute.String & Schema.Attribute.Required;
    obese: Schema.Attribute.String & Schema.Attribute.Required;
    overweight: Schema.Attribute.String & Schema.Attribute.Required;
    people: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle1: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle2: Schema.Attribute.String & Schema.Attribute.Required;
    underweight: Schema.Attribute.String & Schema.Attribute.Required;
    wellnessRating: Schema.Attribute.Component<'quiz.wellness-rating', false>;
    welnessHeader: Schema.Attribute.String & Schema.Attribute.Required;
    women: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuizStepPitch3 extends Struct.ComponentSchema {
  collectionName: 'components_quiz_step_pitch3s';
  info: {
    description: '';
    displayName: 'stepPitch3';
  };
  attributes: {
    after: Schema.Attribute.Component<'quiz.step-pitch3-logic-strings', false>;
    afterString: Schema.Attribute.String;
    and: Schema.Attribute.String & Schema.Attribute.Required;
    before: Schema.Attribute.Component<'quiz.step-pitch3-logic-strings', false>;
    beforeString: Schema.Attribute.String;
    bodyChange: Schema.Attribute.String & Schema.Attribute.Required;
    bodyChangeDescription: Schema.Attribute.Text;
    bodyImages: Schema.Attribute.Component<'quiz.body-images', true>;
    gain: Schema.Attribute.String & Schema.Attribute.Required;
    goal: Schema.Attribute.String & Schema.Attribute.Required;
    graphDisclaimer: Schema.Attribute.String & Schema.Attribute.Required;
    lose: Schema.Attribute.String & Schema.Attribute.Required;
    now: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle1: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle2: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    yourGoal: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuizStepPitch3LogicStrings extends Struct.ComponentSchema {
  collectionName: 'components_quiz_step_pitch3_logic_strings';
  info: {
    displayName: 'stepPitch3LogicStrings';
  };
  attributes: {
    bmiString1: Schema.Attribute.Text & Schema.Attribute.Required;
    bmiString2: Schema.Attribute.Text & Schema.Attribute.Required;
    bmiString3: Schema.Attribute.Text & Schema.Attribute.Required;
    bmiString4: Schema.Attribute.Text & Schema.Attribute.Required;
    expFitnessTitle: Schema.Attribute.String & Schema.Attribute.Required;
    physicalBuildTitle: Schema.Attribute.String & Schema.Attribute.Required;
    typicalDayTitle: Schema.Attribute.String & Schema.Attribute.Required;
    walkingStairsTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuizStepSingleChoice extends Struct.ComponentSchema {
  collectionName: 'components_quiz_step_single_choices';
  info: {
    description: '';
    displayName: 'stepSingleChoice';
    icon: 'check';
  };
  attributes: {
    answers: Schema.Attribute.Component<'quiz.answer', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    answersMale: Schema.Attribute.Component<'quiz.answer', true>;
    common: Schema.Attribute.Component<'quiz.common-step', false> &
      Schema.Attribute.Required;
  };
}

export interface QuizStepSlider extends Struct.ComponentSchema {
  collectionName: 'components_quiz_step_sliders';
  info: {
    displayName: 'stepSlider';
  };
  attributes: {
    common: Schema.Attribute.Component<'quiz.common-step', false>;
    intervals: Schema.Attribute.Component<'quiz.slider-interval', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface QuizStepWeight extends Struct.ComponentSchema {
  collectionName: 'components_quiz_step_weights';
  info: {
    description: '';
    displayName: 'stepWeight';
  };
  attributes: {
    common: Schema.Attribute.Component<'quiz.common-step', false> &
      Schema.Attribute.Required;
    helper: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String;
  };
}

export interface QuizWarningBox extends Struct.ComponentSchema {
  collectionName: 'components_quiz_warning_boxes';
  info: {
    description: '';
    displayName: 'warningBox';
  };
  attributes: {
    normalDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    normalTitle: Schema.Attribute.String & Schema.Attribute.Required;
    obeseDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    obeseTitle: Schema.Attribute.String & Schema.Attribute.Required;
    overweightDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    overweightTitle: Schema.Attribute.String & Schema.Attribute.Required;
    underweightDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    underweightTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuizWellnessRating extends Struct.ComponentSchema {
  collectionName: 'components_quiz_wellness_ratings';
  info: {
    displayName: 'wellnessRating';
  };
  attributes: {
    intervals: Schema.Attribute.Component<
      'quiz.wellness-rating-interval',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuizWellnessRatingInterval extends Struct.ComponentSchema {
  collectionName: 'components_quiz_wellness_rating_intervals';
  info: {
    displayName: 'wellnessRatingInterval';
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    from: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 0;
        },
        number
      >;
    to: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 0;
        },
        number
      >;
  };
}

export interface SectionsFaq extends Struct.ComponentSchema {
  collectionName: 'components_sections_faqs';
  info: {
    description: '';
    displayName: 'faq';
  };
  attributes: {
    getPlan: Schema.Attribute.String;
    questions: Schema.Attribute.Component<'common.faq', true>;
    rated: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsParagraphSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_paragraph_sections';
  info: {
    description: '';
    displayName: 'ParagraphSection';
  };
  attributes: {
    introductions: Schema.Attribute.Component<'promotions.introduction', true>;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WorkoutsSrc extends Struct.ComponentSchema {
  collectionName: 'components_workouts_srcs';
  info: {
    description: '';
    displayName: 'video';
  };
  attributes: {
    srcHls: Schema.Attribute.String;
    srcMp4: Schema.Attribute.String;
    videoSegments: Schema.Attribute.Component<'workouts.video-segment', true>;
  };
}

export interface WorkoutsVideoSegment extends Struct.ComponentSchema {
  collectionName: 'components_workouts_video_segments';
  info: {
    description: '';
    displayName: 'videoSegment';
    icon: 'scissors';
  };
  attributes: {
    segmentLenght: Schema.Attribute.Integer;
    segmentTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'achievement.conditions': AchievementConditions;
      'achievement.duration': AchievementDuration;
      'achievement.streak-requirements': AchievementStreakRequirements;
      'blog.blog-content': BlogBlogContent;
      'blog.blog-test': BlogBlogTest;
      'blog.rich-text-md': BlogRichTextMd;
      'class.video-section': ClassVideoSection;
      'common.faq': CommonFaq;
      'common.image': CommonImage;
      'common.key-value-pair': CommonKeyValuePair;
      'common.media': CommonMedia;
      'common.metadata': CommonMetadata;
      'common.string': CommonString;
      'home.benefit': HomeBenefit;
      'home.benefits-section': HomeBenefitsSection;
      'home.bottom-hero-part': HomeBottomHeroPart;
      'home.bottom-hero-section': HomeBottomHeroSection;
      'home.contact-us-section': HomeContactUsSection;
      'home.faq': HomeFaq;
      'home.faq-section': HomeFaqSection;
      'home.hero-section': HomeHeroSection;
      'home.more-benefits-section': HomeMoreBenefitsSection;
      'home.result': HomeResult;
      'home.results-section': HomeResultsSection;
      'home.second-hero-section': HomeSecondHeroSection;
      'home.seen-on-the-news-section': HomeSeenOnTheNewsSection;
      'home.small-benefits': HomeSmallBenefits;
      'home.social-media-testimonial': HomeSocialMediaTestimonial;
      'home.social-media-testimonials-section': HomeSocialMediaTestimonialsSection;
      'home.testimonial-video-section': HomeTestimonialVideoSection;
      'home.testimonials': HomeTestimonials;
      'home.testimonials-section': HomeTestimonialsSection;
      'home.workout-program': HomeWorkoutProgram;
      'home.workout-programs-section': HomeWorkoutProgramsSection;
      'navigation.navigation-item': NavigationNavigationItem;
      'popup.button': PopupButton;
      'popup.close-button': PopupCloseButton;
      'popup.media': PopupMedia;
      'popup.rating': PopupRating;
      'popup.sub-paragraph': PopupSubParagraph;
      'popup.sub-title': PopupSubTitle;
      'popup.title': PopupTitle;
      'pricing-plan-price.features': PricingPlanPriceFeatures;
      'program.diifficulty': ProgramDiifficulty;
      'program.equipment': ProgramEquipment;
      'program.goals': ProgramGoals;
      'program.intensity': ProgramIntensity;
      'program.movement-pattern': ProgramMovementPattern;
      'program.primary-muscle-group': ProgramPrimaryMuscleGroup;
      'program.program-length': ProgramProgramLength;
      'program.program-type': ProgramProgramType;
      'program.risk-area': ProgramRiskArea;
      'program.secondary-muscle-group': ProgramSecondaryMuscleGroup;
      'program.skill-points-per-class': ProgramSkillPointsPerClass;
      'promotions.as-seen-on-section': PromotionsAsSeenOnSection;
      'promotions.benefit': PromotionsBenefit;
      'promotions.benefits-section': PromotionsBenefitsSection;
      'promotions.body-images': PromotionsBodyImages;
      'promotions.discount': PromotionsDiscount;
      'promotions.freebie': PromotionsFreebie;
      'promotions.freebies-section': PromotionsFreebiesSection;
      'promotions.guarantee-section': PromotionsGuaranteeSection;
      'promotions.header': PromotionsHeader;
      'promotions.hero-section': PromotionsHeroSection;
      'promotions.image-carousel-section': PromotionsImageCarouselSection;
      'promotions.in-the-media-section': PromotionsInTheMediaSection;
      'promotions.introduction': PromotionsIntroduction;
      'promotions.media-reaction-image': PromotionsMediaReactionImage;
      'promotions.media-reactions-section': PromotionsMediaReactionsSection;
      'promotions.personal-program-section': PromotionsPersonalProgramSection;
      'promotions.pitch3-from-to-section': PromotionsPitch3FromToSection;
      'promotions.pitch3-graph-section': PromotionsPitch3GraphSection;
      'promotions.potential-savings-section': PromotionsPotentialSavingsSection;
      'promotions.price-card': PromotionsPriceCard;
      'promotions.product-comparison-section': PromotionsProductComparisonSection;
      'promotions.promotion-banner': PromotionsPromotionBanner;
      'promotions.review': PromotionsReview;
      'promotions.saving': PromotionsSaving;
      'promotions.sliding-testimonial': PromotionsSlidingTestimonial;
      'promotions.sliding-testimonials-section': PromotionsSlidingTestimonialsSection;
      'promotions.testimonial': PromotionsTestimonial;
      'promotions.testimonial-video-section': PromotionsTestimonialVideoSection;
      'promotions.testimonials-section': PromotionsTestimonialsSection;
      'promotions.user-reviews-section': PromotionsUserReviewsSection;
      'promotions.what-users-say-section': PromotionsWhatUsersSaySection;
      'quiz.answer': QuizAnswer;
      'quiz.answer-multi': QuizAnswerMulti;
      'quiz.body-images': QuizBodyImages;
      'quiz.common-step': QuizCommonStep;
      'quiz.email-capture': QuizEmailCapture;
      'quiz.footer': QuizFooter;
      'quiz.header': QuizHeader;
      'quiz.header-slider': QuizHeaderSlider;
      'quiz.promotion-banner': QuizPromotionBanner;
      'quiz.shared': QuizShared;
      'quiz.shared-pitch': QuizSharedPitch;
      'quiz.slider-interval': QuizSliderInterval;
      'quiz.social-media-testimonial': QuizSocialMediaTestimonial;
      'quiz.step-age': QuizStepAge;
      'quiz.step-date': QuizStepDate;
      'quiz.step-gender': QuizStepGender;
      'quiz.step-goal-weight': QuizStepGoalWeight;
      'quiz.step-height': QuizStepHeight;
      'quiz.step-image': QuizStepImage;
      'quiz.step-image-answers': QuizStepImageAnswers;
      'quiz.step-loading': QuizStepLoading;
      'quiz.step-multi-choice': QuizStepMultiChoice;
      'quiz.step-name': QuizStepName;
      'quiz.step-pitch1': QuizStepPitch1;
      'quiz.step-pitch2': QuizStepPitch2;
      'quiz.step-pitch3': QuizStepPitch3;
      'quiz.step-pitch3-logic-strings': QuizStepPitch3LogicStrings;
      'quiz.step-single-choice': QuizStepSingleChoice;
      'quiz.step-slider': QuizStepSlider;
      'quiz.step-weight': QuizStepWeight;
      'quiz.warning-box': QuizWarningBox;
      'quiz.wellness-rating': QuizWellnessRating;
      'quiz.wellness-rating-interval': QuizWellnessRatingInterval;
      'sections.faq': SectionsFaq;
      'sections.paragraph-section': SectionsParagraphSection;
      'workouts.src': WorkoutsSrc;
      'workouts.video-segment': WorkoutsVideoSegment;
    }
  }
}
