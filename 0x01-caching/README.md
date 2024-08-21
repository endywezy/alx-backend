## Caching Algorithms Project - README

### Background Context

This project focuses on exploring various caching algorithms, a critical component in optimizing the performance of systems that handle large amounts of data. By understanding and implementing different caching strategies, you will learn how to manage and prioritize data storage efficiently, ensuring quick data retrieval and reducing latency.

### Resources

To successfully complete this project, you should familiarize yourself with the following resources:

- **Cache Replacement Policies - FIFO (First-In, First-Out)**: Understand how the oldest entries in a cache are replaced first.
- **Cache Replacement Policies - LIFO (Last-In, First-Out)**: Learn about the strategy where the most recent entries are replaced first.
- **Cache Replacement Policies - LRU (Least Recently Used)**: Study the method that replaces the least recently used entries.
- **Cache Replacement Policies - MRU (Most Recently Used)**: Explore the approach that replaces the most recently used entries.
- **Cache Replacement Policies - LFU (Least Frequently Used)**: Understand how the least frequently accessed entries are replaced.

### Learning Objectives

By the end of this project, you should be able to explain the following concepts clearly:

- **General Concepts:**
  - What a caching system is and its purpose.
  - The definitions and differences between FIFO, LIFO, LRU, MRU, and LFU caching policies.
  - The limitations and constraints of caching systems.

### Requirements

#### Python Scripts

- Your Python files will be run and tested on **Ubuntu 18.04 LTS** using **Python 3.7**.
- Each file must end with a new line.
- The first line of every script should be exactly `#!/usr/bin/env python3`.
- A `README.md` file is mandatory in the root folder of the project.
- Your code must follow the **pycodestyle** guidelines (version 2.5).
- All your files must be executable.
- The length of your files will be tested using the `wc` command.
- **Documentation Requirements:**
  - Every module should have a meaningful docstring.
  - Every class should have a descriptive docstring.
  - Every function, whether inside or outside a class, should include a docstring that explains its purpose.

### Project Structure

#### BaseCaching Class

All caching classes in this project must inherit from the `BaseCaching` class, which is defined as follows:

```python
#!/usr/bin/python3
""" BaseCaching module
"""

class BaseCaching():
    """ BaseCaching defines:
      - constants of your caching system
      - where your data are stored (in a dictionary)
    """
    MAX_ITEMS = 4

    def __init__(self):
        """ Initialize
        """
        self.cache_data = {}

    def print_cache(self):
        """ Print the cache
        """
        print("Current cache:")
        for key in sorted(self.cache_data.keys()):
            print("{}: {}".format(key, self.cache_data.get(key)))

    def put(self, key, item):
        """ Add an item in the cache
        """
        raise NotImplementedError("put must be implemented in your cache class")

    def get(self, key):
        """ Get an item by key
        """
        raise NotImplementedError("get must be implemented in your cache class")
```

This base class defines the fundamental structure and rules for your caching system, such as the maximum number of items (`MAX_ITEMS = 4`) and how data is stored (`self.cache_data` as a dictionary). You will extend this class to implement different caching algorithms.

### Conclusion

This project offers a hands-on opportunity to understand the inner workings of caching systems and the various algorithms that can be used to manage data storage effectively. By the end of this project, you will have implemented multiple caching strategies and gained a deeper understanding of how caching can optimize system performance.