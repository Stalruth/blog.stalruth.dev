## Introduction

Yesterday I launched an [experimental fork of the Cut Explorer][experiment]
that shows all of the teams used by people who ended up getting Championship
Points - Sydney's top 32 and Fort Wayne's top 128. I'm launching this as an
experiment first because I was concerned about the performance impacts of
downloading and rendering so much data.

I'm hoping to get some idea of whether I'll push this idea to [the main
version][cut-explorer] by the time the European International Championships is
over, but I might extend the trial further based on a couple factors.

## Differences

As mentioned, the only difference between the versionsd is that the
experimental version contains the top 32 teams from Sydney and the top 128
teams from Fort Wayne. This reflects a significant increase in both the size
of the download and the amount of rendering that the browser has to do.

## Reasons

The week after Bochum and Knoxville saw the first of three reasons I would
consider counting all points earning teams. The Perth Regional Championships
was relatively small with only 113 players, meaning that top 32 would get
points but only top 8 would make cut. I thought that eight teams was a pretty
small sample when looking at analysing the metagame at the event, but top 128
for other events such as the record-breaking Orlando Regional Championships
might cause issues as described above and giving small events special
treatment doesn't sit well with me.

The next week the Natal Regional Championships happened, but the straw that
broke the camel's back was the first tournament of Regulation C, the Sydney
Regional Championships (disclosure: the author lives in Sydney). Even though
it was overshadowed by the concurrent Fort Wayne Regional Championships,
having only 8 teams to analyse from one of only two Regionals that could
inform people going into the European International Championships felt off.

## Concerns

My worries with adding all top 128 teams were twofold - I wanted to maintain
quick loading speeds over slower connections and keep the app running smoothly
on lower end devices, two major gripes I have with modern websites.

The first time I looked into this following the Orlando Regional
Championships, I found that the filesize of the datafile ballooned from 53.5
KB to just under **200 KB**. Not a surprise considering I was capturing
literally four times the teams, but seeing two hundred kilobytes of JSON that
would then need to be parsed and processed by JavaScript (generally the
slowest resource to process on lower end devices) saw me shelve the idea.

On the 2nd of March I cut down the size of the datafiles by removing some
redundant data, bringing the Orlando datafile's size down to 36.7 KB.
I wasn't considering adding more data at this stage, but was adapting to the
larger top cuts of Knoxville Regionals and the Bochum Special Event.

Both issues are increased when considering that the European International
Championships is likely to award Championship Points to the top 256 players.
There's a lot of opportunity for more good quality data for people to probe,
but twice the download size (which is already not small!)

There are ways to deal with these issues - including only displaying the Day 2
teams by default (as currently happens), hiding an "All Teams" option behind
the same option select that already lets you see Top 8 from events that
featured Day 2 Swiss. My main fear here is that while this would reduce the
download size of the webpage (and could lazy-load the rest of the
points-earning teams) people wouldn't notice it and as such the effort would
be wasted.

## Conclusion

Current results have been *okay* but I'm not completely satisfied with the
performance at the moment. Maybe I'll admit that VGC is a bougie hobby and I
maybe don't need to consider low end devices! Maybe I'll allow *just a little
bit of slack in the funny metrics as a treat*, especially if any issues might
be solved if I put this in the main site. (caching!)

I might need to see how the European International Championships goes and how
the website copes with 256 teams before I make any decisions here. (that's
going to make the large Orlando dataset look small!)

If I do decide to push the experiment to the main site, it will be done
retroactively for all Regulation A and B tournaments, partly because I don't
like treating some tournaments differently and looking at some old tournaments
might be a fun curiosity for some people, though I don't expect those to get
reviewed by more than half a dozen people.

[experiment]: https://allpoints--lighthearted-sundae-75b9bf.netlify.app
[cut-explorer]: https://cut-explorer.stalruth.dev
