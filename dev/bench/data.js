window.BENCHMARK_DATA = {
  "lastUpdate": 1712232516336,
  "repoUrl": "https://github.com/krisstern/cacti",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "peter.somogyvari@accenture.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "79517848d3adc02a2dba4e3b310b44e8eacb8ef6",
          "message": "ci(github): refactor ActionLint job to use the official installer\n\n1. Previously we just winged it with a bash script downloading another\nbash script to unzip the actionlint binaries.\n2. From now on we'll use the GitHub action from the marketplace which\nhas a lot of configuration options exposed in a convenient way such as\nwhat type of warnings to ignore, what version of actionlint to install,\netc.\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-04-04T03:19:17-07:00",
          "tree_id": "b4fe749e7d03f98b78f26959af44721300ded29f",
          "url": "https://github.com/krisstern/cacti/commit/79517848d3adc02a2dba4e3b310b44e8eacb8ef6"
        },
        "date": 1712232514262,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 561,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "176 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 346,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "181 samples"
          }
        ]
      }
    ]
  }
}