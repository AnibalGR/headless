#!/bin/bash
WP_PATH="/srv/users/fullcast/apps/headless/public"

# Create Home Page
POST_ID=$(wp post create --post_type=page --post_title='Inicio' --post_status=publish --porcelain --path=$WP_PATH)
echo "Created Home Page with ID: $POST_ID"

# Set as front page
wp option update show_on_front page --path=$WP_PATH
wp option update page_on_front $POST_ID --path=$WP_PATH

# Set ACF Meta Data
# Hero Section
wp post meta update $POST_ID hero_kicker_1 "Fullcast.ai" --path=$WP_PATH
wp post meta update $POST_ID _hero_kicker_1 "field_hero_kicker_1" --path=$WP_PATH

wp post meta update $POST_ID hero_kicker_2 "for the AI-native era of revenue." --path=$WP_PATH
wp post meta update $POST_ID _hero_kicker_2 "field_hero_kicker_2" --path=$WP_PATH

wp post meta update $POST_ID hero_headline "Where <em>Intelligence</em>, <em>Strategy</em>, and <em>Execution</em> meet." --path=$WP_PATH
wp post meta update $POST_ID _hero_headline "field_hero_headline" --path=$WP_PATH

wp post meta update $POST_ID hero_subheadline "Most GTM tools were built 15 years ago as static databases. Fullcast.ai is the first Sales Performance Management platform built from the ground up with a neural core." --path=$WP_PATH
wp post meta update $POST_ID _hero_subheadline "field_hero_subheadline" --path=$WP_PATH

# Architecture Section
wp post meta update $POST_ID arch_headline "Legacy SPM software gives you a <em style=\"font-weight: 300\">diagnostic lookback</em>. Fullcast.ai is a <span style=\"color: var(--fc-cyan)\"><em>predictive engine</em></span>." --path=$WP_PATH
wp post meta update $POST_ID _arch_headline "field_arch_headline" --path=$WP_PATH

wp post meta update $POST_ID arch_subheadline "By unifying every pillar of sales performance into a single AI-driven environment, we empower RevOps leaders to stop being data janitors and start being architects of growth." --path=$WP_PATH
wp post meta update $POST_ID _arch_subheadline "field_arch_subheadline" --path=$WP_PATH

# Advantages Main Section
wp post meta update $POST_ID adv_main_headline "In an AI-native ecosystem, your data doesn't sit there rotting in your CRM — it learns, predicts, and acts." --path=$WP_PATH
wp post meta update $POST_ID _adv_main_headline "field_adv_main_headline" --path=$WP_PATH

wp post meta update $POST_ID adv_main_subheadline "Fullcast.ai eliminates the friction between planning the year and running the business." --path=$WP_PATH
wp post meta update $POST_ID _adv_main_subheadline "field_adv_main_subheadline" --path=$WP_PATH

# Advantage 1
wp post meta update $POST_ID adv_1_title "Autonomous Territory & Quota Management" --path=$WP_PATH
wp post meta update $POST_ID _adv_1_title "field_adv_1_title" --path=$WP_PATH
wp post meta update $POST_ID adv_1_desc "Our AI analyzes market density and historical performance to suggest optimal territory maps and quotas that maximize attainment automatically." --path=$WP_PATH
wp post meta update $POST_ID _adv_1_desc "field_adv_1_desc" --path=$WP_PATH

# Advantage 2
wp post meta update $POST_ID adv_2_title "Self-Correcting Capacity Planning" --path=$WP_PATH
wp post meta update $POST_ID _adv_2_title "field_adv_2_title" --path=$WP_PATH
wp post meta update $POST_ID adv_2_desc "As your team scales or churns, the platform recalculates your hiring roadmap in real-time to ensure you never fall behind your revenue ramp." --path=$WP_PATH
wp post meta update $POST_ID _adv_2_desc "field_adv_2_desc" --path=$WP_PATH

# Advantage 3
wp post meta update $POST_ID adv_3_title "Predictive Forecasting" --path=$WP_PATH
wp post meta update $POST_ID _adv_3_title "field_adv_3_title" --path=$WP_PATH
wp post meta update $POST_ID adv_3_desc "Moving beyond basic math, our models weigh thousands of signals — from rep behavior to macro trends — to deliver the most accurate forecast in the industry." --path=$WP_PATH
wp post meta update $POST_ID _adv_3_desc "field_adv_3_desc" --path=$WP_PATH

# Advantage 4
wp post meta update $POST_ID adv_4_title "Prescriptive Analytics" --path=$WP_PATH
wp post meta update $POST_ID _adv_4_title "field_adv_4_title" --path=$WP_PATH
wp post meta update $POST_ID adv_4_desc "Our AI surfaces alerts that tell you exactly which deals are at risk and which territories are underserved — before they cost you pipeline." --path=$WP_PATH
wp post meta update $POST_ID _adv_4_desc "field_adv_4_desc" --path=$WP_PATH

# Advantage 5
wp post meta update $POST_ID adv_5_title "Dynamic Commissions" --path=$WP_PATH
wp post meta update $POST_ID _adv_5_title "field_adv_5_title" --path=$WP_PATH
wp post meta update $POST_ID adv_5_desc "Incentive compensation that adapts. Automated calculations pay reps instantly and accurately, with AI-driven what-if modeling for future plan designs." --path=$WP_PATH
wp post meta update $POST_ID _adv_5_desc "field_adv_5_desc" --path=$WP_PATH

echo "ACF Fields updated successfully for POST_ID: $POST_ID"
