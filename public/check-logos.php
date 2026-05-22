<?php
require 'wp-load.php';

$query = '
{
  nodeByUri(uri: "/") {
    ... on Page {
      homeFields {
        trustedByLogo1 { node { sourceUrl altText } }
        trustedByLogo2 { node { sourceUrl altText } }
        trustedByLogo3 { node { sourceUrl altText } }
        trustedByLogo4 { node { sourceUrl altText } }
        trustedByLogo5 { node { sourceUrl altText } }
        trustedByLogo6 { node { sourceUrl altText } }
      }
    }
  }
}
';

$response = graphql(['query' => $query]);
print_r(json_encode($response, JSON_PRETTY_PRINT));
