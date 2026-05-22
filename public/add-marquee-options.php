<?php
require 'wp-load.php';

$fields = acf_get_fields('group_home_page_settings');

// Add the two new fields at the beginning of the Logos tab (after the tab and the text).
// The tab is 'tab_logos' and text is 'trusted_by_text'.
$new_fields = [];
foreach ($fields as $field) {
    $new_fields[] = $field;
    if ($field['name'] === 'trusted_by_text') {
        $new_fields[] = array(
            'key' => 'field_trusted_by_marquee_speed',
            'label' => 'Marquee Speed (Seconds)',
            'name' => 'trusted_by_marquee_speed',
            'type' => 'number',
            'instructions' => 'Lower is faster. Default is 25.',
            'default_value' => 25,
            'min' => 5,
            'max' => 100,
        );
        $new_fields[] = array(
            'key' => 'field_trusted_by_logo_size',
            'label' => 'Logo Size (Height in px)',
            'name' => 'trusted_by_logo_size',
            'type' => 'number',
            'instructions' => 'Default is 80.',
            'default_value' => 80,
            'min' => 20,
            'max' => 200,
        );
    }
}

// Fix menu order
foreach ($new_fields as $index => &$nf) {
    $nf['menu_order'] = $index;
    // We only need basic structure for acf_import_field_group, 
    // but reusing the existing fields array usually works well.
}

$group = acf_get_field_group('group_home_page_settings');
$group['fields'] = $new_fields;

acf_import_field_group($group);
echo "GUI updated with speed and size fields!\n";
