<?php
require 'wp-load.php';

$query = '
{
  nodeByUri(uri: "/") {
    ... on Page {
      homeFields {
        archHeadline
        archSubheadline
      }
    }
  }
}
';

$response = graphql(['query' => $query]);
print_r($response);
