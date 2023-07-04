let isMatched = false;

if ($request.hostname.toLowerCase().endsWith(".cn")) {
    isMatched = true;
};

$done({matched: isMatched});
