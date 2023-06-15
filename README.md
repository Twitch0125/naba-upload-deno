# Benchmarks

oha -z 10s http://localhost:8000/html
Summary:
  Success rate: 100.00%
  Total:        10.0005 secs
  Slowest:      0.0064 secs
  Fastest:      0.0002 secs
  Average:      0.0012 secs
  Requests/sec: 42240.5318

  Total data:   127.71 MiB
  Size/request: 317 B
  Size/sec:     12.77 MiB

oha -z 10s http://localhost:8000/upload
Summary:
  Success rate: 100.00%
  Total:        10.0002 secs
  Slowest:      0.0088 secs
  Fastest:      0.0008 secs
  Average:      0.0013 secs
  Requests/sec: 39131.5012

  Total data:   4.48 MiB
  Size/request: 12 B
  Size/sec:     458.57 KiB

oha -z 10s http://localhost:8000/index.html
Summary:
  Success rate: 100.00%
  Total:        10.0007 secs
  Slowest:      0.0602 secs
  Fastest:      0.0017 secs
  Average:      0.0514 secs
  Requests/sec: 969.8348

  Total data:   9.14 MiB
  Size/request: 988 B
  Size/sec:     935.74 KiB