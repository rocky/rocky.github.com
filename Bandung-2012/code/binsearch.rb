# Sample binary search program
def search(a, key, low, high)
  # mid = (high + low) / 2  # truncated midpoint
  mid = high + low / 2  # truncated midpoint
  return mid if a[mid] == key 
  # debugger if a[mid] == nil
  if a[mid] > key
    search(a, key, mid+1, high)
  elsif a[mid] < key
    search(a, key, low, mid-1)
  else
    return nil
  end
end
a = %w(now is the time)
puts search(a, "is", 0, a.size-1)
