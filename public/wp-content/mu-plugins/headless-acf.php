<?php
/**
 * Plugin Name: Headless ACF Fields
 * Description: Registers ACF fields for the headless React frontend.
 * Version: 1.0.0
 * Author: Antigravity
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

add_action( 'acf/init', 'register_headless_acf_fields' );

function register_headless_acf_fields() {
    if ( function_exists( 'acf_add_local_field_group' ) ) {

        acf_add_local_field_group( array(
            'key' => 'group_home_page_settings',
            'title' => 'Home Page Settings',
            'fields' => array(
                // HERO SECTION
                array(
                    'key' => 'field_hero_kicker_1',
                    'label' => 'Hero Kicker 1',
                    'name' => 'hero_kicker_1',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_hero_kicker_2',
                    'label' => 'Hero Kicker 2',
                    'name' => 'hero_kicker_2',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_hero_headline',
                    'label' => 'Hero Headline',
                    'name' => 'hero_headline',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_hero_subheadline',
                    'label' => 'Hero Subheadline',
                    'name' => 'hero_subheadline',
                    'type' => 'textarea',
                    'rows' => 3,
                ),
                array(
                    'key' => 'field_hero_eyebrow',
                    'label' => 'Hero Eyebrow Text',
                    'name' => 'hero_eyebrow',
                    'type' => 'text',
                    'default_value' => 'AI-NATIVE GTM PLATFORM',
                ),
                array(
                    'key' => 'field_hero_email_placeholder',
                    'label' => 'Hero Email Placeholder',
                    'name' => 'hero_email_placeholder',
                    'type' => 'text',
                    'default_value' => 'Enter your work email',
                ),
                array(
                    'key' => 'field_hero_cta_text',
                    'label' => 'Hero CTA Button Text',
                    'name' => 'hero_cta_text',
                    'type' => 'text',
                    'default_value' => 'Get Early Access',
                ),
                array(
                    'key' => 'field_hero_microcopy',
                    'label' => 'Hero Microcopy (below form)',
                    'name' => 'hero_microcopy',
                    'type' => 'text',
                    'default_value' => 'Join the waitlist for the AI-native GTM revolution.',
                ),

                
                // ARCHITECTURE SECTION
                array(
                    'key' => 'field_arch_headline',
                    'label' => 'Architecture Headline',
                    'name' => 'arch_headline',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_arch_subheadline',
                    'label' => 'Architecture Subheadline',
                    'name' => 'arch_subheadline',
                    'type' => 'textarea',
                    'rows' => 3,
                ),
                array(
                    'key' => 'field_arch_eyebrow',
                    'label' => 'Architecture Shift: Eyebrow Text',
                    'name' => 'arch_eyebrow',
                    'type' => 'text',
                    'default_value' => 'THE ARCHITECTURE SHIFT',
                ),
                
                // ADVANTAGES SECTION
                array(
                    'key' => 'field_adv_eyebrow',
                    'label' => 'Advantages: Eyebrow Text',
                    'name' => 'adv_eyebrow',
                    'type' => 'text',
                    'default_value' => 'The AI-Native Advantage',
                ),
                array(
                    'key' => 'field_adv_cta_text',
                    'label' => 'Advantages: Row CTA Button Text',
                    'name' => 'adv_cta_text',
                    'type' => 'text',
                    'default_value' => 'Join the Waitlist',
                ),
                array(
                    'key' => 'field_adv_main_headline',

                    'label' => 'Advantages Main Headline',
                    'name' => 'adv_main_headline',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_adv_main_subheadline',
                    'label' => 'Advantages Main Subheadline',
                    'name' => 'adv_main_subheadline',
                    'type' => 'textarea',
                    'rows' => 3,
                ),
                
                // Advantage 1
                array(
                    'key' => 'field_adv_1_title',
                    'label' => 'Advantage 1 Title',
                    'name' => 'adv_1_title',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_adv_1_desc',
                    'label' => 'Advantage 1 Description',
                    'name' => 'adv_1_desc',
                    'type' => 'textarea',
                    'rows' => 2,
                ),
                
                // Advantage 2
                array(
                    'key' => 'field_adv_2_title',
                    'label' => 'Advantage 2 Title',
                    'name' => 'adv_2_title',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_adv_2_desc',
                    'label' => 'Advantage 2 Description',
                    'name' => 'adv_2_desc',
                    'type' => 'textarea',
                    'rows' => 2,
                ),
                
                // Advantage 3
                array(
                    'key' => 'field_adv_3_title',
                    'label' => 'Advantage 3 Title',
                    'name' => 'adv_3_title',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_adv_3_desc',
                    'label' => 'Advantage 3 Description',
                    'name' => 'adv_3_desc',
                    'type' => 'textarea',
                    'rows' => 2,
                ),
                
                // Advantage 4
                array(
                    'key' => 'field_adv_4_title',
                    'label' => 'Advantage 4 Title',
                    'name' => 'adv_4_title',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_adv_4_desc',
                    'label' => 'Advantage 4 Description',
                    'name' => 'adv_4_desc',
                    'type' => 'textarea',
                    'rows' => 2,
                ),
                
                // Advantage 5
                array(
                    'key' => 'field_adv_5_title',
                    'label' => 'Advantage 5 Title',
                    'name' => 'adv_5_title',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_adv_5_desc',
                    'label' => 'Advantage 5 Description',
                    'name' => 'adv_5_desc',
                    'type' => 'textarea',
                    'rows' => 2,
                ),
                
                // TRUSTED BY SECTION (Logos)
                array(
                    'key' => 'field_trusted_by_text',
                    'label' => 'Trusted By Eyebrow Text',
                    'name' => 'trusted_by_text',
                    'type' => 'text',
                    'default_value' => 'TRUSTED BY THE REVOPS LEADERS OF TOMORROW',
                ),
                array(
                    'key' => 'field_trusted_by_logos',
                    'label' => 'Trusted By Logos',
                    'name' => 'trusted_by_logos',
                    'type' => 'repeater',
                    'layout' => 'table',
                    'button_label' => 'Add Logo',
                    'sub_fields' => array(
                        array(
                            'key' => 'field_trusted_by_logo_image',
                            'label' => 'Logo Image',
                            'name' => 'logo_image',
                            'type' => 'image',
                            'return_format' => 'array',
                            'preview_size' => 'medium',
                            'library' => 'all',
                        ),
                    ),
                ),
                // CUSTOMER STORIES SECTION
                array(
                    'key' => 'field_stories_eyebrow',
                    'label' => 'Stories Eyebrow Text',
                    'name' => 'stories_eyebrow',
                    'type' => 'text',
                    'default_value' => 'CUSTOMER STORIES',
                ),
                array(
                    'key' => 'field_stories_headline',
                    'label' => 'Stories Headline',
                    'name' => 'stories_headline',
                    'type' => 'text',
                    'default_value' => 'How we help revenue teams scale.',
                ),
                // STORY 1
                array(
                    'key' => 'field_story_1_badge',
                    'label' => 'Story 1: Badge / Category',
                    'name' => 'story_1_badge',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_story_1_title',
                    'label' => 'Story 1: Title',
                    'name' => 'story_1_title',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_story_1_description',
                    'label' => 'Story 1: Description / Quote',
                    'name' => 'story_1_description',
                    'type' => 'textarea',
                    'rows' => 3,
                ),
                array(
                    'key' => 'field_story_1_author_name',
                    'label' => 'Story 1: Author Name',
                    'name' => 'story_1_author_name',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_story_1_author_title',
                    'label' => 'Story 1: Author Title / Role',
                    'name' => 'story_1_author_title',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_story_1_image',
                    'label' => 'Story 1: Main Image',
                    'name' => 'story_1_image',
                    'type' => 'image',
                    'return_format' => 'array',
                    'preview_size' => 'large',
                    'library' => 'all',
                ),
                array(
                    'key' => 'field_story_1_link',
                    'label' => 'Story 1: Link URL',
                    'name' => 'story_1_link',
                    'type' => 'text',
                    'default_value' => '#',
                ),
                // STORY 2
                array(
                    'key' => 'field_story_2_badge',
                    'label' => 'Story 2: Badge / Category',
                    'name' => 'story_2_badge',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_story_2_title',
                    'label' => 'Story 2: Title',
                    'name' => 'story_2_title',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_story_2_description',
                    'label' => 'Story 2: Description / Quote',
                    'name' => 'story_2_description',
                    'type' => 'textarea',
                    'rows' => 3,
                ),
                array(
                    'key' => 'field_story_2_author_name',
                    'label' => 'Story 2: Author Name',
                    'name' => 'story_2_author_name',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_story_2_author_title',
                    'label' => 'Story 2: Author Title / Role',
                    'name' => 'story_2_author_title',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_story_2_image',
                    'label' => 'Story 2: Main Image',
                    'name' => 'story_2_image',
                    'type' => 'image',
                    'return_format' => 'array',
                    'preview_size' => 'large',
                    'library' => 'all',
                ),
                array(
                    'key' => 'field_story_2_link',
                    'label' => 'Story 2: Link URL',
                    'name' => 'story_2_link',
                    'type' => 'text',
                    'default_value' => '#',
                ),
                // STORY 3
                array(
                    'key' => 'field_story_3_badge',
                    'label' => 'Story 3: Badge / Category',
                    'name' => 'story_3_badge',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_story_3_title',
                    'label' => 'Story 3: Title',
                    'name' => 'story_3_title',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_story_3_description',
                    'label' => 'Story 3: Description / Quote',
                    'name' => 'story_3_description',
                    'type' => 'textarea',
                    'rows' => 3,
                ),
                array(
                    'key' => 'field_story_3_author_name',
                    'label' => 'Story 3: Author Name',
                    'name' => 'story_3_author_name',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_story_3_author_title',
                    'label' => 'Story 3: Author Title / Role',
                    'name' => 'story_3_author_title',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_story_3_image',
                    'label' => 'Story 3: Main Image',
                    'name' => 'story_3_image',
                    'type' => 'image',
                    'return_format' => 'array',
                    'preview_size' => 'large',
                    'library' => 'all',
                ),
                array(
                    'key' => 'field_story_3_link',
                    'label' => 'Story 3: Link URL',
                    'name' => 'story_3_link',
                    'type' => 'text',
                    'default_value' => '#',
                ),
                // WHY FULLCAST SECTION
                array(
                    'key' => 'field_why_eyebrow',
                    'label' => 'Why Fullcast: Eyebrow',
                    'name' => 'why_eyebrow',
                    'type' => 'text',
                    'default_value' => 'WHY FULLCAST',
                ),
                array(
                    'key' => 'field_why_title',
                    'label' => 'Why Fullcast: Main Title Statement',
                    'name' => 'why_title',
                    'type' => 'textarea',
                    'rows' => 3,
                    'default_value' => 'Most GTM tools were built 15 years ago as static databases that require manual entry, constant cleanup, and expensive customization.',
                ),
                array(
                    'key' => 'field_why_description',
                    'label' => 'Why Fullcast: Description Text',
                    'name' => 'why_description',
                    'type' => 'textarea',
                    'rows' => 4,
                    'default_value' => "Fullcast.ai is different. We've built the first Sales Performance Management platform from the ground up with a neural core — one that turns your GTM plan from a static document into a living, breathing, and self-optimizing intelligence.",
                ),
                array(
                    'key' => 'field_why_link_text',
                    'label' => 'Why Fullcast: Link Text',
                    'name' => 'why_link_text',
                    'type' => 'text',
                    'default_value' => 'See the AI-Native Advantage',
                ),
                array(
                    'key' => 'field_why_link_url',
                    'label' => 'Why Fullcast: Link URL',
                    'name' => 'why_link_url',
                    'type' => 'text',
                    'default_value' => '#',
                ),
                // PRODUCT CAROUSEL SECTION
                array(
                    'key' => 'field_product_eyebrow',
                    'label' => 'Product Carousel: Eyebrow Text',
                    'name' => 'product_eyebrow',
                    'type' => 'text',
                    'default_value' => 'THE PRODUCT',
                ),
                array(
                    'key' => 'field_product_headline',
                    'label' => 'Product Carousel: Headline',
                    'name' => 'product_headline',
                    'type' => 'text',
                    'default_value' => 'Revenue intelligence you can see.',
                ),
                array(
                    'key' => 'field_product_subhead',
                    'label' => 'Product Carousel: Subheadline',
                    'name' => 'product_subhead',
                    'type' => 'textarea',
                    'rows' => 3,
                    'default_value' => 'See the pipeline, the patterns, and the plays — unified. Fullcast.ai collapses five legacy dashboards into one neural workspace that learns every time you use it.',
                ),
                // PRODUCT 1
                array(
                    'key' => 'field_prod_1_badge',
                    'label' => 'Product 1: Badge / Category',
                    'name' => 'prod_1_badge',
                    'type' => 'text',
                    'default_value' => 'REVENUE PLAYBOOK',
                ),
                array(
                    'key' => 'field_prod_1_title',
                    'label' => 'Product 1: Title',
                    'name' => 'prod_1_title',
                    'type' => 'text',
                    'default_value' => 'Turn territory plans into pipeline.',
                ),
                array(
                    'key' => 'field_prod_1_desc',
                    'label' => 'Product 1: Description',
                    'name' => 'prod_1_desc',
                    'type' => 'textarea',
                    'rows' => 3,
                    'default_value' => 'Align GTM teams, optimize coverage, and route every opportunity to the right rep — tracked from plan to performance.',
                ),
                array(
                    'key' => 'field_prod_1_image',
                    'label' => 'Product 1: Image Mockup',
                    'name' => 'prod_1_image',
                    'type' => 'image',
                    'return_format' => 'array',
                    'preview_size' => 'large',
                    'library' => 'all',
                ),
                array(
                    'key' => 'field_prod_1_color',
                    'label' => 'Product 1: Gradient Theme',
                    'name' => 'prod_1_color',
                    'type' => 'text',
                    'default_value' => 'linear-gradient(135deg, #3e5d50 0%, #678266 100%)',
                ),
                // PRODUCT 2
                array(
                    'key' => 'field_prod_2_badge',
                    'label' => 'Product 2: Badge / Category',
                    'name' => 'prod_2_badge',
                    'type' => 'text',
                    'default_value' => 'PIPELINE SIGNAL',
                ),
                array(
                    'key' => 'field_prod_2_title',
                    'label' => 'Product 2: Title',
                    'name' => 'prod_2_title',
                    'type' => 'text',
                    'default_value' => 'Forecast with conviction.',
                ),
                array(
                    'key' => 'field_prod_2_desc',
                    'label' => 'Product 2: Description',
                    'name' => 'prod_2_desc',
                    'type' => 'textarea',
                    'rows' => 3,
                    'default_value' => "Every deal scored against 40M+ comparable outcomes — not a rep's gut.",
                ),
                array(
                    'key' => 'field_prod_2_image',
                    'label' => 'Product 2: Image Mockup',
                    'name' => 'prod_2_image',
                    'type' => 'image',
                    'return_format' => 'array',
                    'preview_size' => 'large',
                    'library' => 'all',
                ),
                array(
                    'key' => 'field_prod_2_color',
                    'label' => 'Product 2: Gradient Theme',
                    'name' => 'prod_2_color',
                    'type' => 'text',
                    'default_value' => 'linear-gradient(135deg, #3e5d50 0%, #678266 100%)',
                ),
                // PRODUCT 3
                array(
                    'key' => 'field_prod_3_badge',
                    'label' => 'Product 3: Badge / Category',
                    'name' => 'prod_3_badge',
                    'type' => 'text',
                    'default_value' => 'PATTERN DETECTION',
                ),
                array(
                    'key' => 'field_prod_3_title',
                    'label' => 'Product 3: Title',
                    'name' => 'prod_3_title',
                    'type' => 'text',
                    'default_value' => 'Catch drift before it costs you.',
                ),
                array(
                    'key' => 'field_prod_3_desc',
                    'label' => 'Product 3: Description',
                    'name' => 'prod_3_desc',
                    'type' => 'textarea',
                    'rows' => 3,
                    'default_value' => 'Fullcast.ai flags capacity gaps, stalled segments, and comp leakage in real time.',
                ),
                array(
                    'key' => 'field_prod_3_image',
                    'label' => 'Product 3: Image Mockup',
                    'name' => 'prod_3_image',
                    'type' => 'image',
                    'return_format' => 'array',
                    'preview_size' => 'large',
                    'library' => 'all',
                ),
                array(
                    'key' => 'field_prod_3_color',
                    'label' => 'Product 3: Gradient Theme',
                    'name' => 'prod_3_color',
                    'type' => 'text',
                    'default_value' => 'linear-gradient(135deg, #3e5d50 0%, #678266 100%)',
                ),
                // PRODUCT 4
                array(
                    'key' => 'field_prod_4_badge',
                    'label' => 'Product 4: Badge / Category',
                    'name' => 'prod_4_badge',
                    'type' => 'text',
                    'default_value' => 'TERRITORY INTELLIGENCE',
                ),
                array(
                    'key' => 'field_prod_4_title',
                    'label' => 'Product 4: Title',
                    'name' => 'prod_4_title',
                    'type' => 'text',
                    'default_value' => 'Plan without spreadsheets.',
                ),
                array(
                    'key' => 'field_prod_4_desc',
                    'label' => 'Product 4: Description',
                    'name' => 'prod_4_desc',
                    'type' => 'textarea',
                    'rows' => 3,
                    'default_value' => 'Rebalance quotas, coverage, and capacity in one canvas — models update live.',
                ),
                array(
                    'key' => 'field_prod_4_image',
                    'label' => 'Product 4: Image Mockup',
                    'name' => 'prod_4_image',
                    'type' => 'image',
                    'return_format' => 'array',
                    'preview_size' => 'large',
                    'library' => 'all',
                ),
                array(
                    'key' => 'field_prod_4_color',
                    'label' => 'Product 4: Gradient Theme',
                    'name' => 'prod_4_color',
                    'type' => 'text',
                    'default_value' => 'linear-gradient(135deg, #3e5d50 0%, #678266 100%)',
                ),
                // PRODUCT 5
                array(
                    'key' => 'field_prod_5_badge',
                    'label' => 'Product 5: Badge / Category',
                    'name' => 'prod_5_badge',
                    'type' => 'text',
                    'default_value' => 'REVENUE PLAYBOOK',
                ),
                array(
                    'key' => 'field_prod_5_title',
                    'label' => 'Product 5: Title',
                    'name' => 'prod_5_title',
                    'type' => 'text',
                    'default_value' => 'Turn insight into action.',
                ),
                array(
                    'key' => 'field_prod_5_desc',
                    'label' => 'Product 5: Description',
                    'name' => 'prod_5_desc',
                    'type' => 'textarea',
                    'rows' => 3,
                    'default_value' => 'Prescriptive plays routed to the right AE, CSM, or ops lead — tracked end to end.',
                ),
                array(
                    'key' => 'field_prod_5_image',
                    'label' => 'Product 5: Image Mockup',
                    'name' => 'prod_5_image',
                    'type' => 'image',
                    'return_format' => 'array',
                    'preview_size' => 'large',
                    'library' => 'all',
                ),
                array(
                    'key' => 'field_prod_5_color',
                    'label' => 'Product 5: Gradient Theme',
                    'name' => 'prod_5_color',
                    'type' => 'text',
                    'default_value' => 'linear-gradient(135deg, #3e5d50 0%, #678266 100%)',
                ),

                // CTA BANNER SECTION (Join the Inner Circle)
                array(
                    'key' => 'field_cta_eyebrow',
                    'label' => 'CTA Banner: Eyebrow Text',
                    'name' => 'cta_eyebrow',
                    'type' => 'text',
                    'default_value' => 'READY TO JOIN?',
                ),
                array(
                    'key' => 'field_cta_heading',
                    'label' => 'CTA Banner: Heading',
                    'name' => 'cta_heading',
                    'type' => 'text',
                    'default_value' => 'Join the Inner Circle',
                ),
                array(
                    'key' => 'field_cta_description',
                    'label' => 'CTA Banner: Description',
                    'name' => 'cta_description',
                    'type' => 'textarea',
                    'rows' => 3,
                    'default_value' => 'We are currently onboarding a limited number of partners who are ready to move from manual workflows to autonomous growth.',
                ),
                array(
                    'key' => 'field_cta_email_placeholder',
                    'label' => 'CTA Banner: Email Input Placeholder',
                    'name' => 'cta_email_placeholder',
                    'type' => 'text',
                    'default_value' => 'Enter your work email',
                ),
                array(
                    'key' => 'field_cta_button_text',
                    'label' => 'CTA Banner: Button Text',
                    'name' => 'cta_button_text',
                    'type' => 'text',
                    'default_value' => 'Get Early Access',
                ),
                array(
                    'key' => 'field_cta_footnote',
                    'label' => 'CTA Banner: Footnote Text',
                    'name' => 'cta_footnote',
                    'type' => 'text',
                    'default_value' => 'Join the waitlist for the AI-native GTM revolution.',
                ),
                array(
                    'key' => 'field_nav_primary_link_text',
                    'label' => 'Primary Nav Link Text',
                    'name' => 'nav_primary_link_text',
                    'type' => 'text',
                    'default_value' => 'Inicio',
                ),
                array(
                    'key' => 'field_nav_cta_text',
                    'label' => 'Nav CTA Button Text',
                    'name' => 'nav_cta_text',
                    'type' => 'text',
                    'default_value' => 'Admin Panel',
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'page_type',
                        'operator' => '==',
                        'value' => 'front_page',
                    ),
                ),
            ),
            'menu_order' => 0,
            'position' => 'normal',
            'style' => 'default',
            'label_placement' => 'top',
            'instruction_placement' => 'label',
            'hide_on_screen' => array(
                0 => 'the_content',
            ),
            'active' => true,
            'description' => '',
            'show_in_graphql' => 1,
            'graphql_field_name' => 'homeFields',
        ) );
    }
}

