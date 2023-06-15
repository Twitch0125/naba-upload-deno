# Benchmarks

POST: /upload
~6.6s

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
  Total:        10.0008 secs
  Slowest:      0.0057 secs
  Fastest:      0.0007 secs
  Average:      0.0027 secs
  Requests/sec: 18594.3724

  Total data:   191.89 MiB
  Size/request: 1.06 KiB
  Size/sec:     19.19 MiB

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