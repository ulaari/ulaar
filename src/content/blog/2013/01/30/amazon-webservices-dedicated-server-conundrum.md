---
title: 'Amazon Webservices or dedicated server?'
date: '2013-01-30T12:47:32+05:30'
status: publish
permalink: /2013/01/30/amazon-webservices-dedicated-server-conundrum
author: vishy
description: ''
type: post
id: 2476
categories: 
    - Random
tags:
    - 'amazon webservices'
    - aws
    - dedicated
    - ec2
    - 'elastic compute cloud'
    - server
    - stackoverflow
post_format: []
image:
    - ''
seo_follow:
    - 'false'
seo_noindex:
    - 'false'
---
If your website needs are anything more than a blog (or corporate website), chances are you’d have researched options like “cloud hosting”, “dedicated hosting”, virtualization or the big daddy – Amazon WebServices (aka “AWS”). Lately I’ve been busy converting my 7 year old Macbook into a developer-friendly machine — installing all manners of CLI developer tools and tinkering with Amazon Webservices. Why I’m getting back in touch with my “developer side” is the subject of a separate post.

So anyways.. I’ve been impressed with the quality of forum discussions and finally learning what the fuss is all about [Stackoverflow](http://stackoverflow.com/) – is there any installation/error code that DOES NOT have a fix on Stackoverflow?

This morning I read an AWS forums posting which succinctly answers the [Why AWS](https://forums.aws.amazon.com/message.jspa?messageID=98830) question. The thread starts with how Amazon measures an ‘instance hour’.

User *Allen* writes about the instance hour:

> See “Paying for What You Use”, the 2nd to last paragraph at [http://ec2.amazonaws.com](http://ec2.amazonaws.com/) . That should explain it. You are charged for every running instance, whether its in use or just sitting idle. The rounding up happens for each instance, i.e., for each instance, you are charged an integral number of hours (1 hour, 2 hours, 3 hours, etc.), never a fractional number of hours.

User *aschildbach* is miffed about EC2’s unfair /uncompetitive policy..

> Hmmm, this makes EC2 very un-competitve in my eyes. I am currently paying 20 Euros a month for a dedicated machine with roughly an EC2-Unit of prozessor, but only 512 MB RAM. This price is including tax, several terabytes of traffic (more than enough) and some backup space.
> 
> With EC2, I would pay 30 days \* 24 hours \* $0.1 \* 1.19 (tax) = $85. And that does not take into account backup space (S3), traffic and true persistent storage (EBS) yet.
> 
> Sure, the “Cloud” has it’s advantages (Firewall, private Subnet, easy scaling). But is this really worth 4 times the price?
> 
> I would prefer a pricing model that would actually charge me for usage.

At which point, user *lenny* delivers the checkmate argument – basically the value of AWS over a dedicated server.

> ***Sure, the “Cloud” has it’s advantages (Firewall, private Subnet, easy scaling). But is this really worth 4 times the price?* EC2 does not provide you with a private subnet. &lt;img src=”http://developer.amazonwebservices.com/connect/images/emoticons/wink.gif” border=”0″ alt=”” /&gt;**
> 
> In order to see why EC2 is special, pay particular attention to the word “Elastic”. There are a lot of real-world applications whose resource needs vary throughout the day/month/year (nightly processing/monthly processing/Christmas season, respectively).
> 
> Does your hosting provider let you spin up a server every night at midnight for batch processing and then shut it down when the processing is done? If they do, do they charge more than $0.10 for the privilege?
> 
> Does your hosting provider let you add servers and remove servers from your clusters dynamically and programmatically based on current load,however you decide to measure load? If they do, do they charge you by the hour? Probably not.
> 
> Does your hosting provider let you spin up a testing environment for a day of testing before going live, and only charge you for the day’s usage?
> 
> Does your hosting provider let you conjure up a 400 CPU server farm with 140GB of RAM in 5 minutes and for $16.00/hour? I’m thinking probably not.
> 
> If you’re honest with yourself about what you’re getting for your 20Euros/mo, what do you think would happen to your application in the event of a software or hardware failure? Do you have remote reboot to recover from a kernel panic? Do you have access to console output? How long would those take? What would happen in case of a hard disk failure? How much downtime would that cause in your 20 Euro/mo plan? More than 5 minutes? What if an unskilled backhoe operator accidentally severed your provider’s internet connection? Could you immediately launch your application in a different datacenter, or would your downtime be measured in days?
> 
> If your computing needs are static and downtime in your application is acceptable, Amazon’s Elastic Compute Cloud is probably not the lowest-cost tool for the job. Indeed, I have a family blog and photo album… do you think host it on EC2 or on a $5.00/mo webhost? Sure, I experience downtime, and my site’s performance is abysmal, but that is acceptable to me. If your customers can’t get to your e-commerce site to spend money and they go to your competitors instead, is that acceptable to you?