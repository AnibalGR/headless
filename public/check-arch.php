<?php
require 'wp-load.php';

$post_id = get_option('page_on_front');
echo "Front Page ID: " . $post_id . "\n";

$headline = get_field('arch_headline', $post_id);
$subheadline = get_field('arch_subheadline', $post_id);

echo "Headline: " . var_export($headline, true) . "\n";
echo "Subheadline: " . var_export($subheadline, true) . "\n";
