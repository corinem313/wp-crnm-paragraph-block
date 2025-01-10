<?php
/**
 * Plugin Name:     Custom Paragraph Block
 * Description:     Extends the default Paragraph block to add tooltip functionality.
 * Version:         1.0.0
 * Author:          CORINEM LLC
 * Author URI:      https://corinem.com
 * Text Domain:     crnm_paragraph_tooltip
* License:          GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 */

function crnm_register_paragraph_tooltip() {
    wp_register_script(
        'crnm-paragraph-block',
        plugins_url('build/index.js', __FILE__),
        [ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-rich-text' ],
        filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
    );

    wp_register_style(
        'crnm-paragraph-block-style',
        plugins_url('css/tooltip-style.css', __FILE__),
        [],
        filemtime(plugin_dir_path(__FILE__) . 'css/tooltip-style.css')
    );

    wp_register_style(
        'crnm-paragraph-block-editor-style',
        plugins_url('css/editor.css', __FILE__),
        [],
        filemtime(plugin_dir_path(__FILE__) . 'css/editor.css')
    );

    register_block_type('crnm/paragraph-tooltip', [
        'editor_script' => 'crnm-paragraph-block',
        'editor_style'  => 'crnm-paragraph-block-editor-style',
        'style'         => 'crnm-paragraph-block-style',
    ]);
}

add_action('init', 'crnm_register_paragraph_tooltip');

function crnm_paragraph_tooltip_styles() {
  wp_enqueue_style('crnm-paragraph-tooltip-styles', plugins_url('css/styles.css', __FILE__));
}
add_action('wp_enqueue_scripts', 'crnm_paragraph_tooltip_styles');
