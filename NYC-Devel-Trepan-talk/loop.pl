use Enbugger "trepan";
$leave_loop = 0;
# $SIG{'HUP'} = sub {
#     my $sig = shift;
#     print "Got signal $sig in debugged program handler\n";
#     Enbugger->stop;
# };
print "My pid is $$. Looping...\n";
until ($leave_loop) {
    sleep 1;
}
print "That's all folks!\n";
