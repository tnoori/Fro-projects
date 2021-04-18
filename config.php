<?php

return [
    'baseUrl' => 'http://localhost:3000',
    'production' => false,
    'siteName' => 'Website',
    'siteDescription' => '..',
    'siteAuthor' => 'CYBERAAN STUDIO',

    'getExcerpt' => function ($page, $length = 255) {
        $content = $page->excerpt ?? $page->getContent();
        $cleaned = strip_tags(
            preg_replace(['/<pre>[\w\W]*?<\/pre>/', '/<h\d>[\w\W]*?<\/h\d>/'], '', $content),
            '<code>'
        );

        $truncated = substr($cleaned, 0, $length);

        if (substr_count($truncated, '<code>') > substr_count($truncated, '</code>')) {
            $truncated .= '</code>';
        }

        return strlen($cleaned) > $length
        ? preg_replace('/\s+?(\S+)?$/', '', $truncated) . '...'
        : $cleaned;
    },
    'isActive' => function ($page, $path) {
        return ends_with(trimPath($page->getPath()), trimPath($path));
    },
    'active' => function ($page, $section) {
        return str_contains($page->getPath(), $section) ? 'active' : '';
    },

];