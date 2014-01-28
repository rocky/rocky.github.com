Hi everybody!
In the past we've had people talk about their specific stacks. For me this has been very interesting. But I think any full stack engineer has to be able to change the stack on demand. I often work across different stacks.

So today I'd talk a little on common areas that cut across stacks. But since I'm giving the talk, it will be a bit personal.

[slide]

Here are some of the things that go into full-stack development. This slide is a bit busy. And it probably doesn't to a full job of covering everything. Things in brown are sometimes covered in an IDE. Things in italics are sometimes covered in project hosting. And you can see these overlap. Generally both project hosting or IDEs provide interfaces to existing tools, so it often is helpful to understand the underlying tools.

Since this topic is too broad, I'm going to cherry pick in order to hopefully point out a couple things here and there you might not be aware of.

[slide]

So the smallish things I'm going to briefly cover are
project hosting, continuous testing, read/eval/print loops or REPLs
and virtual environments. The last item is there just so I can suggest a project for folks to consider.

[slide]
Again, Project hosting covers things like repository management, documentation wikis, issue trackers, and possibly other things.

The gold standard for project hosting nowadays is probably github. I am always impressed by how it constantly improves in a thoughtful way.
It has a social rating component where people can star projects, follow the project, or easily fork the code. Within the last year or so they also added git service service hook to lots of outside projects. And finally, although using github for public repositories is free, it does allow private repositories which you pay for.

[slide]
Another project hosting site I use is code.google.com. I don't have much to say to recommend this over the next option. I have my Python and Go projects there. In contrast to github, you can use mercurial, or subversion instead of git.

One thing I like about code.google.com is the fact that there is a download section of released code. github has a way of creating a zip file of the source file on demand, but notice in google you can download python eggs, or Debian packages. I got notice that google was phasing out the download section for security reasons.

Finally one can request a source-code review which is pretty neat. I've never used this though.

[slide]
One last project hosting site I think worth mentioning is one of the oldest: sourceforge.net. The are the same folks as thinkgeek.com and the geek news organization slashdot.org. It looks like the job board dice.com recently bought them out.

Like code.google.com, they support git, mercurial and subversion. One thing I think neat about them is the stats on their downloads section.
Note that you can gen information by country or OS. And they have a neat map showing where your code is used most.

Recently they added a way to import from code.google.com.

Of these, sourceforge and code.google.com host public projects. For github, you pay for private repositories. Is there something that is free for *private* repositories?

[slide]
Yes - bitbucket.org. It is sort of the reverse of github.com. It is free for private repositories, but you pay in order to make them public. It is run by the same folks as popular bug tracking software Jira.

There are other public repositories like savannah.gnu.org, or gna.org for GPL software. But time time to move onto another topic...

[slide]
Continuous integration.

In projects I run, testing is very important. All of my projects come with tests to verify the code does what is expected. Many the project hosting sites hook into continuous testing sites.

For github, one of the easiest to hook into is travis.org.

Notice how travis can test with not just one version of Perl, but several of them.

And the code to do this is pretty minimal. For perl, basically all I do is list the module dependencies and versions of Perl I want to try.

For other things, like testing emacs code which has library dependencies, things are not as simple. If someone wants to look at the emacs-dbgr code and tell me how to get the dependencies working, I'd be grateful.

And what does one do for code.google.com?

[slide]
For this, I use drone.io. In some respects it is simpler than travis.

[click on link] The gray link apparently is because it didn't understand a URL name with a final slash. I put in a service request to address this but haven't heard back.

Also, A pre-written git hook that automatically runs drone.io isn't baked in like it is on github.

But if you look at the docs there they have a way to run a deploy on successful testing.

And for bitbucket?

[slide]
The have their own service called bamboo. And they also have a way you can hook into Jenkins. I've not used either.

[slide]


;;; Local Variables: ***
;;; eval: (longlines-mode) ***
;;; End: ***
