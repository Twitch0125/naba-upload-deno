# Benchmarks

oha -z 10s http://localhost:8000/html
Summary:
  Success rate: 100.00%
  Total:        10.0004 secs
  Slowest:      0.0055 secs
  Fastest:      0.0002 secs
  Average:      0.0012 secs
  Requests/sec: 41577.6757

oha -z 10s http://localhost:8000/upload
Summary:
  Success rate: 100.00%
  Total:        10.0003 secs
  Slowest:      0.0058 secs
  Fastest:      0.0011 secs
  Average:      0.0021 secs
  Requests/sec: 23434.7904

  Total data:   238.03 MiB
  Size/request: 1.04 KiB
  Size/sec:     23.80 MiB

oha -z 10s http://localhost:8000/index.html
Summary:
  Success rate: 100.00%
  Total:        10.0016 secs
  Slowest:      0.0611 secs
  Fastest:      0.0114 secs
  Average:      0.0510 secs
  Requests/sec: 976.7480

  Total data:   372.06 KiB
  Size/request: 39 B
  Size/sec:     37.20 KiB