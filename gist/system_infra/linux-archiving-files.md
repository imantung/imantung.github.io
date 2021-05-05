---
layout: gist
title: Linux (Archiving Files)
category: system_infra
---

# Linux (Archiving Files)

Reference:
- <https://www.ostechnix.com/how-to-archive-files-and-directories-in-linux-part-1/>
- <https://www.ostechnix.com/how-to-archive-files-and-directories-in-linux-part-2/>
- <https://superuser.com/questions/205223/pros-and-cons-of-bzip-vs-gzip>
- <https://tukaani.org/lzma/benchmarks.html>

Decompression speed (fast to slow): 
- gzip, zip 
- 7z 
- rar 
- bzip2

Compression speed (fast to slow): 
- gzip, zip 
- bzip2 
- 7z 
- rar

Compression ratio (better to worse): 
- 7z 
- rar
- bzip2 
- gzip 
- zip

File extension:
- `.tar`: plain 
- `.tar.gz` or `.tar.tgz`: gzip
- `.tar.bz2` or `.tar.tbz`: bzip


### Compress

```bash
# archive
tar -czvf name-of-archive.tar.gz /path/to/directory-or-file # gzip

# multiple file/directory
tar -czvf archive.tar.gz /home/ubuntu/Downloads /usr/local/stuff /home/ubuntu/Documents/notes.txt

# exclude file
tar -czvf archive.tar.gz /home/ubuntu --exclude=/home/ubuntu/Downloads --exclude=/home/ubuntu/.cache
tar -czvf archive.tar.gz /home/ubuntu --exclude=*.mp4

# using bzip2 archive
tar -cjvf archive.tar.bz2 stuff

# using plain archive
tar -cvf archive.tar stuff

# append to existing archive
tar rf ostechnix.tar ostechnix/ sk/ example.txt

```

- -c: Create an archive.
- -z: Compress the archive with gzip.
- -j: Compress the archive with bzip.
- -v: Display progress in the terminal while creating the archive, also known as “verbose” mode. The v is always optional in these commands, but it’s helpful.
- -f: Allows you to specify the filename of the archive.


### Decompress/Extract

```bash
# extract gzip
tar -xzvf archive.tar.gz

# extract bzip
tar -xjvf archive.tar.gz

# extract plain
tar -xvf archive.tar.gz

# extract to specific directory
tar -xzvf archive.tar.gz -C /tmp
```

### Show content

```bash
tar tf ostechnix.tar 

# verbose
tar tvf ostechnix.tar 
```