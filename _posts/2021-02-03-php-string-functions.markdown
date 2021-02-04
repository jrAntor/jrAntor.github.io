---
layout: post
title:  "Basic Php String Functions"
date:   2020-11-11 00:14:19 +0600
permalink: /blog/php-string-functions
---

This post contains useful string functions of PHP, kind of a cheat sheet.


- **Getting length of a string**

 ```php

  $str = "change me";
  echo strlen($str); //9

 ```

- **Counting number of words**

```php

  $str = "change me";
  echo str_word_count($str); //2

```

- **Reverse a string**

```php
   $str = "change me";
   echo strrev($str); //em egnahc

```

- **Concatenation of strings**

```php

  $str = "hello ";
  $str2 = "world";

  echo $str1.$str2; //hello world 

```

- **Hash of a string**

```php

  $str = "change me";
  echo md5($str); // c9be20c442bb0680b7c941961f5c3db

```

- **Lowercase/Uppercase the string**

```php

  $str = "Change Me";

  echo strtolower($str); // change me
  echo strtoupper($str); // CHANGE ME

```

- **Search for text position in a string**

```php

  $str = "A needle in a haystack";
  echo strpos($str,"needle"); // 2

```

- **String Compare**

```php

  $str1 = "hello";
  $str2 = "Hello world";

  echo strcmp($str1,$str2); // 1, because $str1 > $str2

```

- **Getting part of a string**

```php

  $str = "Hello world";

  echo substr($str,0,6); //Hello ; substr(string, start, end*) *end is optional

```

 See More: [String Functions](https://www.php.net/manual/en/ref.strings.php)

