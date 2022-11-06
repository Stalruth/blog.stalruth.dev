## Introduction

There's a very common refrain about the state of the modern internet:

> I'm old enough to remember when the Internet wasn't a group of five websites,
> each consisting of screenshots of the other four.
>
> <footer><a href="https://tom.eeastman.nz">Tom Eastman</a>, <a href="https://twitter.com/tveastman/status/1069674780826071040">source</a></footer>

What happens when one of those four websites dies?  Vine dying was a major
cultural event - what's going to happen when Twitter bites the dust, with so
many people dependent on it for community?

## Background

It has been about a week since Elon Musk completed his acquisition of Twitter,
and reactions to the news have been mixed. Some people have celebrated the
acquisition, saying that it starts a new era of freedom of speech on the Web
(what speech exactly is newly freed is sadly easy to guess).  Other people
have jumped ship to other social media platforms, hoping to rebuild their
communities on what they view as greener pastures.  Others have pledged to
hang on to Twitter as a platform until the website stops being useful to them.

I fall pretty squarely into the last group of people - as long as Twitter is
valuable to me I'll probably keep using it.  However Twitter's acquisition and
widely predicted downfall raises other questions about how and why we build
our online lives on platforms open to these risks - questions I'm not
personally equipped to answer, either due to age or experience working with
technology.  So instead I'll talk about how this blog runs and the content it
will host.

## Technology

Firstly, the domain.  [stalruth.dev][self] is a domain I started renting in
2020, and plan to keep around for a long time yet both as a rudimentary
portfolio site and as a parking space for projects that need a URL.

[self]: https://stalruth.dev/

It's nice to have a space that's actually mine on here, even if that's subject
to some terms and conditions. In this case that's the Registrar I rent the
domain from (Tucows through [Hover]) and the Registry that keeps track of the `.dev`
domains ([Google Domains]).

[Hover]: https://hover.com/
[Google Domains]: https://get.dev/

The website itself is a collection of static files served by [Netlify], with
[Eleventy] putting posts written in Markdown into Liquid templates.  Image
hosting when that happens will probably be handled through Netlify too - they
offer services to help this page load quickly no matter where in the world you
are. (less relying on Australia's infamous internet connections!)

[Netlify]: https://netlify.com/
[Eleventy]: https://11ty.dev/

It's a lot more effort than posting on Twitter, but having a place online which
is ultimately static files seems like a highly portable solution should anything
in the chain change, fail, or if I outgrow any of these intermediaries.

Almost all of these things can change without you, the reader, noticing. (The
domain is the biggest issue here because that's how you find the site!)
Hopefully that means that no matter what platforms come and go I'll have this
space right here.  And it's much more customisable to boot.

## What's this even going to be anyway?

This blog isn't going to have any specific topic.  I might implement a tagging
system eventually, but in the meantime you can expect a mixture of Pokémon,
programming, and General Long Posts on things.  I've been pretty clear in the
past that I think Twitter Threads are an inadequate way to communicate
longform ideas, and hopefully having this place will let me
post longer things on the rare occasion I think of something longer than a
sentence.

The blame for giving me the idea can go to several people (specifically [Ian],
[Maisy], and [Leah]) with some ideas for this website's layout taken from [Alex
Jago] and [Julia Evans].

At the moment it's all very much a work in progress. TODO:

- Images
- Actually style this (What if it was purple?!)
- Tags
    - Display tags on the front page
- RSS/Atom/what feeds are actually used anymore idk i literally just learned
  that Atom and RSS are different
- Add links to the header and/or footer
- Stick the footer to the bottom of the page

[Ian]: https://ianmitchell.dev/
[Maisy]: https://likesdinosaurs.com/
[Leah]: https://leah.link/
[Alex Jago]: https://abjago.net/
[Julia Evans]: https://jvns.ca/

