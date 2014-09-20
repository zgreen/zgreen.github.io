---
layout: post
title:  "Some Notes on Picking One or Two Random Posts Using WP REST API"
date:   2014-06-21
category: blog
excerpt: You can use the WP REST API to GET posts with Ajax.
---

You can use the [WP REST API](https://github.com/WP-API/WP-API) to GET posts with Ajax:

{% highlight javascript %}
$.getJSON('/wp-json/posts')
	.done(function(data){
		// Got the posts, now do something with them
	});
{% endhighlight %}
If you want to get just the first post:
{% highlight javascript %}
$.getJSON('/wp-json/posts')
	.done(function(data){
		// Get the first post
		var firstPost = data[0];
		// Do something
	});
{% endhighlight %}
If you want to get a random post, you could first count the number of objects in your JSON array, and then pick a random number from that range.
{% highlight javascript %}
$.getJSON('/wp-json/posts')
	.done(function(data){
		// Count the objects
		var dataLength = data.length;
		// Pick a random post, choosing an integer from the range
		var randomPost = Math.round(Math.random()*dataLength);
		// Get the random post
		var firstPost = data[randomPost];
		// Do something
	});
{% endhighlight %}
If you want to get two random posts, you can choose two random integers from the range. But you want to make sure that those two integers aren't the same, or else you'll end up getting the same two posts. Use a `while` to regenerate the second integer if it is equal to the first:
{% highlight javascript %}
$.getJSON('/wp-json/posts')
	.done(function(data){
		// Count the objects
		var dataLength = data.length;
		// Pick two random posts, choosing two integers from the range
		var randomPost1 = Math.round(Math.random()*dataLength);
		var randomPost2 = Math.round(Math.random()*dataLength);
		while(randomPost1 == randomPost2) {
			randomPost2 = Math.round(Math.random()*dataLength);
		}
		// Get the random posts
		var firstPost = data[randomPost1];
		var secondPost = data[randomPost2];
		// Do something
	});
{% endhighlight %}
One problem with this approach: if you only have a very small number of posts—two or three—the `while` loop could run for a long time before it succeeds in finding a `randomPost2` that doesn't equal `randomPost1`. And, if you have only one post, that while loop will run forever.

A smarter approach is to use a shuffle function, [like this](http://bost.ocks.org/mike/shuffle/).

It's also worth noting that, by default, Wordpress sets a number of posts per page, and this goes for the JSON, too. To return all your posts, set this in your functions.php, plugin.php, etc.:
{% highlight php %}
// Watch out, this is a major performance drag
function no_post_limit( $query ) {
    $query->set( 'posts_per_page', -1 );
  }
}
add_action( 'pre_get_posts', 'no_post_limit', 1 );
{% endhighlight %}
Note that this is a _bad_ function to actually run on a page that calls `WP_Query`, as it can cause extremely slow load times. A better approach, in this case, might be to [authenticate](https://github.com/WP-API/WP-API/blob/f2322ad49e445a0b4af5ba805f89be991b28e048/docs/authentication.md) using a [nonce](http://codex.wordpress.org/WordPress_Nonces) and set the `postnumber` with Ajax.