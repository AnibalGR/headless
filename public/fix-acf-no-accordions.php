<?php
require 'wp-load.php';

if ( ! function_exists('acf_import_field_group') ) {
    die("ACF not active\n");
}

$fields = array();
$menu_order = 0;

function add_tab(&$fields, &$menu_order, $key, $label) {
    $fields[] = array(
        'key' => $key,
        'label' => $label,
        'name' => '',
        'type' => 'tab',
        'placement' => 'left',
        'endpoint' => 0,
    );
}

// 1. HERO TAB
add_tab($fields, $menu_order, 'tab_hero', '🦸‍♂️ Hero');
$fields[] = array('key' => 'field_hero_kicker_1', 'label' => 'Hero Kicker 1', 'name' => 'hero_kicker_1', 'type' => 'text');
$fields[] = array('key' => 'field_hero_kicker_2', 'label' => 'Hero Kicker 2', 'name' => 'hero_kicker_2', 'type' => 'text');
$fields[] = array('key' => 'field_hero_headline', 'label' => 'Hero Headline', 'name' => 'hero_headline', 'type' => 'text');
$fields[] = array('key' => 'field_hero_subheadline', 'label' => 'Hero Subheadline', 'name' => 'hero_subheadline', 'type' => 'textarea', 'rows' => 3);
$fields[] = array('key' => 'field_hero_eyebrow', 'label' => 'Hero Eyebrow Text', 'name' => 'hero_eyebrow', 'type' => 'text');
$fields[] = array('key' => 'field_hero_email_placeholder', 'label' => 'Hero Email Placeholder', 'name' => 'hero_email_placeholder', 'type' => 'text');
$fields[] = array('key' => 'field_hero_cta_text', 'label' => 'Hero CTA Button Text', 'name' => 'hero_cta_text', 'type' => 'text');
$fields[] = array('key' => 'field_hero_microcopy', 'label' => 'Hero Microcopy', 'name' => 'hero_microcopy', 'type' => 'text');

// 2. LOGOS TAB
add_tab($fields, $menu_order, 'tab_logos', '🤝 Trusted Logos');
$fields[] = array('key' => 'field_trusted_by_text', 'label' => 'Trusted By Eyebrow', 'name' => 'trusted_by_text', 'type' => 'text');
for ($i = 1; $i <= 20; $i++) {
    $fields[] = array('key' => 'field_trusted_by_logo_'.$i, 'label' => 'Logo '.$i, 'name' => 'trusted_by_logo_'.$i, 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium', 'library' => 'all');
}

// 3. STORIES TAB
add_tab($fields, $menu_order, 'tab_stories', '🗣️ Stories');
$fields[] = array('key' => 'field_stories_eyebrow', 'label' => 'Stories Eyebrow', 'name' => 'stories_eyebrow', 'type' => 'text');
$fields[] = array('key' => 'field_stories_headline', 'label' => 'Stories Headline', 'name' => 'stories_headline', 'type' => 'text');
for ($i = 1; $i <= 3; $i++) {
    $fields[] = array('key' => 'field_story_'.$i.'_badge', 'label' => 'Story '.$i.' Badge', 'name' => 'story_'.$i.'_badge', 'type' => 'text');
    $fields[] = array('key' => 'field_story_'.$i.'_title', 'label' => 'Story '.$i.' Title', 'name' => 'story_'.$i.'_title', 'type' => 'text');
    $fields[] = array('key' => 'field_story_'.$i.'_description', 'label' => 'Story '.$i.' Quote', 'name' => 'story_'.$i.'_description', 'type' => 'textarea', 'rows' => 3);
    $fields[] = array('key' => 'field_story_'.$i.'_author_name', 'label' => 'Story '.$i.' Author Name', 'name' => 'story_'.$i.'_author_name', 'type' => 'text');
    $fields[] = array('key' => 'field_story_'.$i.'_author_title', 'label' => 'Story '.$i.' Author Title', 'name' => 'story_'.$i.'_author_title', 'type' => 'text');
    $fields[] = array('key' => 'field_story_'.$i.'_image', 'label' => 'Story '.$i.' Image', 'name' => 'story_'.$i.'_image', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium', 'library' => 'all');
    $fields[] = array('key' => 'field_story_'.$i.'_link', 'label' => 'Story '.$i.' Link', 'name' => 'story_'.$i.'_link', 'type' => 'text');
}

// 4. WHY FULLCAST TAB
add_tab($fields, $menu_order, 'tab_why', '❓ Why Fullcast');
$fields[] = array('key' => 'field_why_eyebrow', 'label' => 'Eyebrow', 'name' => 'why_eyebrow', 'type' => 'text');
$fields[] = array('key' => 'field_why_title', 'label' => 'Title', 'name' => 'why_title', 'type' => 'textarea', 'rows' => 3);
$fields[] = array('key' => 'field_why_description', 'label' => 'Description', 'name' => 'why_description', 'type' => 'textarea', 'rows' => 4);
$fields[] = array('key' => 'field_why_link_text', 'label' => 'Link Text', 'name' => 'why_link_text', 'type' => 'text');
$fields[] = array('key' => 'field_why_link_url', 'label' => 'Link URL', 'name' => 'why_link_url', 'type' => 'text');

// 5. PRODUCTS TAB
add_tab($fields, $menu_order, 'tab_products', '📦 Products');
$fields[] = array('key' => 'field_product_eyebrow', 'label' => 'Product Eyebrow', 'name' => 'product_eyebrow', 'type' => 'text');
$fields[] = array('key' => 'field_product_headline', 'label' => 'Product Headline', 'name' => 'product_headline', 'type' => 'text');
$fields[] = array('key' => 'field_product_subhead', 'label' => 'Product Subhead', 'name' => 'product_subhead', 'type' => 'textarea', 'rows' => 3);
for ($i = 1; $i <= 5; $i++) {
    $fields[] = array('key' => 'field_prod_'.$i.'_badge', 'label' => 'Product '.$i.' Badge', 'name' => 'prod_'.$i.'_badge', 'type' => 'text');
    $fields[] = array('key' => 'field_prod_'.$i.'_title', 'label' => 'Product '.$i.' Title', 'name' => 'prod_'.$i.'_title', 'type' => 'text');
    $fields[] = array('key' => 'field_prod_'.$i.'_desc', 'label' => 'Product '.$i.' Description', 'name' => 'prod_'.$i.'_desc', 'type' => 'textarea', 'rows' => 3);
    $fields[] = array('key' => 'field_prod_'.$i.'_image', 'label' => 'Product '.$i.' Image', 'name' => 'prod_'.$i.'_image', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium', 'library' => 'all');
    $fields[] = array('key' => 'field_prod_'.$i.'_color', 'label' => 'Product '.$i.' Color Gradient', 'name' => 'prod_'.$i.'_color', 'type' => 'text');
}

// 6. ADVANTAGES TAB
add_tab($fields, $menu_order, 'tab_adv', '⭐ Advantages');
$fields[] = array('key' => 'field_adv_eyebrow', 'label' => 'Advantages Eyebrow', 'name' => 'adv_eyebrow', 'type' => 'text');
$fields[] = array('key' => 'field_adv_main_headline', 'label' => 'Advantages Main Headline', 'name' => 'adv_main_headline', 'type' => 'text');
$fields[] = array('key' => 'field_adv_main_subheadline', 'label' => 'Advantages Subheadline', 'name' => 'adv_main_subheadline', 'type' => 'textarea', 'rows' => 3);
$fields[] = array('key' => 'field_adv_cta_text', 'label' => 'Advantages CTA Text', 'name' => 'adv_cta_text', 'type' => 'text');

for ($i = 1; $i <= 5; $i++) {
    $fields[] = array('key' => 'field_adv_'.$i.'_title', 'label' => 'Advantage '.$i.' Title', 'name' => 'adv_'.$i.'_title', 'type' => 'text');
    $fields[] = array('key' => 'field_adv_'.$i.'_desc', 'label' => 'Advantage '.$i.' Description', 'name' => 'adv_'.$i.'_desc', 'type' => 'textarea', 'rows' => 2);
}

// 7. ARCHITECTURE TAB
add_tab($fields, $menu_order, 'tab_arch', '🏛️ Architecture');
$fields[] = array('key' => 'field_arch_eyebrow', 'label' => 'Architecture Eyebrow', 'name' => 'arch_eyebrow', 'type' => 'text');
$fields[] = array('key' => 'field_arch_headline', 'label' => 'Architecture Headline', 'name' => 'arch_headline', 'type' => 'text');
$fields[] = array('key' => 'field_arch_subheadline', 'label' => 'Architecture Subheadline', 'name' => 'arch_subheadline', 'type' => 'textarea', 'rows' => 3);


// 8. CTA TAB
add_tab($fields, $menu_order, 'tab_cta', '🎯 CTA');
$fields[] = array('key' => 'field_cta_eyebrow', 'label' => 'Eyebrow', 'name' => 'cta_eyebrow', 'type' => 'text');
$fields[] = array('key' => 'field_cta_heading', 'label' => 'Heading', 'name' => 'cta_heading', 'type' => 'text');
$fields[] = array('key' => 'field_cta_description', 'label' => 'Description', 'name' => 'cta_description', 'type' => 'textarea', 'rows' => 3);
$fields[] = array('key' => 'field_cta_email_placeholder', 'label' => 'Email Placeholder', 'name' => 'cta_email_placeholder', 'type' => 'text');
$fields[] = array('key' => 'field_cta_button_text', 'label' => 'Button Text', 'name' => 'cta_button_text', 'type' => 'text');
$fields[] = array('key' => 'field_cta_footnote', 'label' => 'Footnote', 'name' => 'cta_footnote', 'type' => 'text');

// 9. NAV TAB
add_tab($fields, $menu_order, 'tab_nav', '🧭 Nav');
$fields[] = array('key' => 'field_nav_primary_link_text', 'label' => 'Primary Link Text', 'name' => 'nav_primary_link_text', 'type' => 'text');
$fields[] = array('key' => 'field_nav_cta_text', 'label' => 'Nav CTA Text', 'name' => 'nav_cta_text', 'type' => 'text');

// Fix menu order
foreach ($fields as $index => &$field) {
    $field['menu_order'] = $index;
}

$group = array(
    'ID' => 531,
    'key' => 'group_home_page_settings',
    'title' => 'Home Page Settings',
    'fields' => $fields,
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
    'style' => 'seamless',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
    'hide_on_screen' => array(
        0 => 'the_content',
    ),
    'active' => true,
    'description' => '',
    'show_in_graphql' => 1,
    'graphql_field_name' => 'homeFields',
);

acf_import_field_group($group);
echo "GUI updated with 20 logos!\n";
