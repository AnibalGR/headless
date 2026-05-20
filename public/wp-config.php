<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'headless-wp-lG3yjQBr' );

/** Database username */
define( 'DB_USER', 'vDJebEYp3KUz' );

/** Database password */
define( 'DB_PASSWORD', 'FAteDOkwyFZLTKSu' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'YToiU<&Tx7-Js$|E*KM>Xl%sWsuWxOX)&pfnJi!:7dw7$3Tdb%CR<wqvuyyUxE$*' );
define( 'SECURE_AUTH_KEY',   '8Fq^wZ2^mQQ6]R;|wy7{4;:MAZomP`:vrT18]jt;T1+ptS=]`7^2i@kl<^2qF7sQ' );
define( 'LOGGED_IN_KEY',     'WY@.@Q31f`v83{^NMph5/-LCd]tmlvyPyFvrKEJ99tIc$)X..Y$ta2:u[-OaW/Yk' );
define( 'NONCE_KEY',         'qkI@Nwed 5sf_;K&# Lqev[D?+Yx7qD:{kC Frd^^1r<KANh;+_FutF+Gi`43LAe' );
define( 'AUTH_SALT',         'PFd1K;kmG5/kXj^`K</yNihROrzU:$vH&F=z-4t)qTL-wX8g.5=[ yJ</&gI}^UT' );
define( 'SECURE_AUTH_SALT',  '32z}rV;23IY>NgxiU;,}TkQkO:r0f90{U}#;j5d#6F..8?L?W):Qu};)Jd~L_#b.' );
define( 'LOGGED_IN_SALT',    '~o%2}W(5??1$g[sS@$vq#b>RVhU}ccd0=916r>uzr/<^yEoK=PR7+#L3&v8Lh:+=' );
define( 'NONCE_SALT',        'gl7GXytr]v/>Mqk sd|Mqz$YgDeJWVXvMc/=@V3!v~NP!4` G0z=*#:Sg-:[gly-' );
define( 'WP_CACHE_KEY_SALT', 'k*5Jmq*)Q+?v[BJfH)wFhE)p+sX8d`PkAdP5i</]2GI+4C%E#MInXyVE`=>k7dlF' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_40ef1be57e_';


/* Add any custom values between this line and the "stop editing" line. */

/* Change WP_MEMORY_LIMIT to increase the memory limit for public pages. */
define('WP_MEMORY_LIMIT', '256M');

/* Uncomment and change WP_MAX_MEMORY_LIMIT to increase the memory limit for admin pages. */
//define('WP_MAX_MEMORY_LIMIT', '256M');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
