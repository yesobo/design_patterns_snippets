// CREATIONAL PATTERNS
{  
  "name": "Constructor",
  "description": "To create specific types of objects, both preparing the object for use and accepting arguments which a constructor can use to set the values of member properties and methods when the object is first created.",
  "category": "Creational",
  "context": "",
  "problem_solved": "",
  "solution": "",
  "design": "",
  "implementation_guide": "",
  "illustration": "",
  "code_examples": "https://raw.github.com/yesobo/design_patterns_snippets/master/constructor.js",
  "co_requisites":"",
  "relations": "",
  "known_usage": "",
  "fitness_of_purpose": "",
  "usefulness": "",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "object"
}

{  
  "name": "Module",
  "description": "To further emulate the concept of classes in such a way that we're able to include both public/private methods and variables inside a single object, thus shielding particular parts from the global scope.",
    "creation": {
    "creator": "Richard Comford",
    "year": "2003",
    "popularized_by": "Douglas Crockford"
  },
  "category": "Structural",
  "context": "Our Javascript code is messy with functions and variables mixed up together and we have the need to abstract code parts into modules.",
    "problem_solved": [
      {
        "title": "Conflicting",
        "description": "Function names overwrite each other."
      },
      {
        "title": "bad code organization",
        "description": "Javascript functions are difficult to localize in a large javascript code section."
      }
    ],
  "solution": "Encapsulate functions and variables in its own “namespaces” (modules).",
  "design": "https://raw.github.com/yesobo/design_patterns_snippets/master/module/module_design.js",
  "implementation_guide": [
    {
      "step_number": "1",
      "code": "https://raw.github.com/yesobo/design_patterns_snippets/master/module/module_impl_1.js",
      "description": "Inside our someModule object we are creating a function and executing it inmediately. Everything the function returns will be asigned to our someModule object that will be our module."
    },
    {
      "step_number": "2",
      "code": "https://raw.github.com/yesobo/design_patterns_snippets/master/module/module_impl_2.js",
      "description": "Here we have a simple template that covers namespacing, public and private variables."
    }
  ],
  "illustration": "",
  "code_examples": "",
  "co_requisites": "",
  "relations": [
    {
      "name": "Singleton",
      "description": "Module pattern is based on Singleton"
    },
    {
      "name": "Revealing Module",
      "description": "Improved version of module pattern"
    }
  ],
  "known_usage": [
    {
      "where": "YUI",
      "how": "YUI components creation"
    }
  ],
  "fitness_of_purpose": "",
  "usefulness": "",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "object"
}

{  
  "name": "Revealing Module",
  "description": "Improved version of module pattern",
  "creation": {
    "creator": "Christian Heilmann",
  },
  "category": "Structural",
  "context": "In the module patter we have to repeat the name of the main object when we wanted to call one public method from another to access public variables. And we have to switch to object literal notation for the things we wish to make public.",
  "problem_solved": [
    {
      "code": "https://raw.github.com/yesobo/design_patterns_snippets/master/revealing_module/problem_solved.js"
    }
  ],
  "solution": "Define all the module functions and variables in the private scope and return an anonymous object with pointers to the private functionality we wished to reveal as public.",
  "design": "https://raw.github.com/yesobo/design_patterns_snippets/master/revealing_module/rev_module_design.js",
  "implementation_guide": "",
  "illustration": "",
  "code_examples": "",
  "co_requisites":"",
  "relations": [
    {
      "name": "module",
      "description": "improved version of module pattern"
    }
  ],
  "known_usage": "",
  "fitness_of_purpose": "",
  "usefulness": "A more strucutred an easier to understand than module pattern",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "object",
  "disadvantages": {
    "code": "https://raw.github.com/yesobo/design_patterns_snippets/master/revealing_module/problem_solved.js",
    "description": "if a private function refers to a public function, that public function can't be overriden if a patch is necessary"
  }
}

{  
  "name": "Factory Method",
  "description": "This makes an instance of several derived classes based on interfaced data or events.",
  "category": "Creational",
  "context": "",
  "problem_solved": "",
  "solution": "",
  "design": "",
  "implementation_guide": "",
  "illustration": "",
  "code_example": " https://gist.github.com/elijahmanor/5328936/raw/5654f3904e1ea0c7c7b63780a6cc6cf3f551fbe6/singleton.js",
  "co_requisites":"",
  "relations": "",
  "known_usage": "",
  "fitness_of_purpose": "",
  "usefulness": "",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "class"
}

{  
  "name": "Abstract Factory",
  "description": "Creates an instance of several families of classes without detailing concrete classes.",
  "category": "Creational",
  "context": "",
  "problem_solved": "",
  "solution": "",
  "design": "",
  "implementation_guide": "",
  "illustration": "",
  "code_example": "",
  "co_requisites":"",
  "relations": "",
  "known_usage": "",
  "fitness_of_purpose": "",
  "usefulness": "",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "object"
}

{  
  "name": "Builder",
  "description": "Separates object construction from its representation, always creates the same type of object.",
  "category": "Creational",
  "context": "",
  "problem_solved": "",
  "solution": "",
  "design": "",
  "implementation_guide": "",
  "illustration": "",
  "code_example": "",
  "co_requisites":"",
  "relations": "",
  "known_usage": "",
  "fitness_of_purpose": "",
  "usefulness": "",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "object"
}

{  
  "name": "Prototype",
  "description": "A fully initialized instance used for copying or cloning.",
  "category": "Creational",
  "context": "",
  "problem_solved": "",
  "solution": "",
  "design": "",
  "implementation_guide": "",
  "illustration": "",
  "code_example": "",
  "co_requisites":"",
  "relations": "",
  "known_usage": "",
  "fitness_of_purpose": "",
  "usefulness": "",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "object"
}

{  
  "name": "Singleton",
  "description": "A class with only a single instance with global access points.",
  "category": "Creational",
  "context": "",
  "problem_solved": "",
  "solution": "",
  "design": "",
  "implementation_guide": "",
  "illustration": "",
  "code_example": "",
  "co_requisites":"",
  "relations": "",
  "known_usage": "",
  "fitness_of_purpose": "",
  "usefulness": "",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "object"
}

// STRUCTURAL PATTERNS

{  
  "name": "Adapter",
  "description": "Match interfaces of different classes therefore classes can work together despite incompatible interfaces",
  "category": "Structural",
  "context": "",
  "problem_solved": "",
  "solution": "",
  "design": "",
  "implementation_guide": "",
  "illustration": "",
  "code_example": "",
  "co_requisites":"",
  "relations": "",
  "known_usage": "",
  "fitness_of_purpose": "",
  "usefulness": "",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "Class"
}

{  
  "name": "Adapter",
  "description": "Match interfaces of different classes therefore classes can work together despite incompatible interfaces",
  "category": "Structural",
  "context": "",
  "problem_solved": "",
  "solution": "",
  "design": "",
  "implementation_guide": "",
  "illustration": "",
  "code_example": "",
  "co_requisites":"",
  "relations": "",
  "known_usage": "",
  "fitness_of_purpose": "",
  "usefulness": "",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "object"
}

{  
  "name": "Bridge",
  "description": "Separates an object's interface from its implementation so the two can vary independently",
  "category": "Structural",
  "context": "",
  "problem_solved": "",
  "solution": "",
  "design": "",
  "implementation_guide": "",
  "illustration": "",
  "code_example": "",
  "co_requisites":"",
  "relations": "",
  "known_usage": "",
  "fitness_of_purpose": "",
  "usefulness": "",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "object"
}

{  
  "name": "Composite",
  "description": "A structure of simple and composite objects which makes the total object more than just the sum of its parts.",
  "category": "Structural",
  "context": "",
  "problem_solved": "",
  "solution": "",
  "design": "",
  "implementation_guide": "",
  "illustration": "",
  "code_example": "",
  "co_requisites":"",
  "relations": "",
  "known_usage": "",
  "fitness_of_purpose": "",
  "usefulness": "",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "object"
}

{  
  "name": "Decorator",
  "description": "Dynamically add alternate processing to objects.",
  "category": "Structural",
  "context": "",
  "problem_solved": "",
  "solution": "",
  "design": "",
  "implementation_guide": "",
  "illustration": "",
  "code_example": "",
  "co_requisites":"",
  "relations": "",
  "known_usage": "",
  "fitness_of_purpose": "",
  "usefulness": "",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "object"
}

{  
  "name": "Facade",
  "description": "A single class that hides the complexity of an entire subsystem.",
  "category": "Structural",
  "context": "",
  "problem_solved": "",
  "solution": "",
  "design": "",
  "implementation_guide": "",
  "illustration": "",
  "code_example": "",
  "co_requisites":"",
  "relations": "",
  "known_usage": "",
  "fitness_of_purpose": "",
  "usefulness": "",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "object"
}

{  
  "name": "Flyweight",
  "description": "A fine-grained instance used for efficient sharing of information that is contained elsewhere.",
  "category": "Structural",
  "context": "",
  "problem_solved": "",
  "solution": "",
  "design": "",
  "implementation_guide": "",
  "illustration": "",
  "code_example": "",
  "co_requisites":"",
  "relations": "",
  "known_usage": "",
  "fitness_of_purpose": "",
  "usefulness": "",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "object"
}

{  
  "name": "Proxy",
  "description": "A place holder object representing the true object",
  "category": "Structural",
  "context": "",
  "problem_solved": "",
  "solution": "",
  "design": "",
  "implementation_guide": "",
  "illustration": "",
  "code_example": "",
  "co_requisites":"",
  "relations": "",
  "known_usage": "",
  "fitness_of_purpose": "",
  "usefulness": "",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "object"
}

// BEHAVIORAL PATTERNS
{  
  "name": "Interpreter",
  "description": "A way to include language elements in an application to match the grammar of the intended language.",
  "category": "Behavioral",
  "context": "",
  "problem_solved": "",
  "solution": "",
  "design": "",
  "implementation_guide": "",
  "illustration": "",
  "code_example": "",
  "co_requisites":"",
  "relations": "",
  "known_usage": "",
  "fitness_of_purpose": "",
  "usefulness": "",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "class"
}

{  
  "name": "Template Method",
  "description": "Creates the shell of an algorithm in a method, then defer the exact steps to a subclass.",
  "category": "Behavioral",
  "context": "",
  "problem_solved": "",
  "solution": "",
  "design": "",
  "implementation_guide": "",
  "illustration": "",
  "code_example": "",
  "co_requisites":"",
  "relations": "",
  "known_usage": "",
  "fitness_of_purpose": "",
  "usefulness": "",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "class"
}

{  
  "name": "Chain of Responsibility",
  "description": "A way of passing a request between a chain of objects to find the object that can handle the request.",
  "category": "Behavioral",
  "context": "",
  "problem_solved": "",
  "solution": "",
  "design": "",
  "implementation_guide": "",
  "illustration": "",
  "code_example": "",
  "co_requisites":"",
  "relations": "",
  "known_usage": "",
  "fitness_of_purpose": "",
  "usefulness": "",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "object"
}

{  
  "name": "Command",
  "description": "Encapsulate a command request as an object to enable, logging and/or queuing of requests, and provides error-handling for unhandled requests.",
  "category": "Behavioral",
  "context": "",
  "problem_solved": "",
  "solution": "",
  "design": "",
  "implementation_guide": "",
  "illustration": "",
  "code_example": "",
  "co_requisites":"",
  "relations": "",
  "known_usage": "",
  "fitness_of_purpose": "",
  "usefulness": "",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "object"
}

{  
  "name": "Iterator",
  "description": "Sequentially access the elements of a collection without knowing the inner workings of the collection.",
  "category": "Behavioral",
  "context": "",
  "problem_solved": "",
  "solution": "",
  "design": "",
  "implementation_guide": "",
  "illustration": "",
  "code_example": "",
  "co_requisites":"",
  "relations": "",
  "known_usage": "",
  "fitness_of_purpose": "",
  "usefulness": "",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "object"
}

{  
  "name": "Mediator",
  "description": "Defines simplified communication between classes to prevent a group of classes from referring explicitly to each other.",
  "category": "Behavioral",
  "context": "",
  "problem_solved": "",
  "solution": "",
  "design": "",
  "implementation_guide": "",
  "illustration": "",
  "code_example": "",
  "co_requisites":"",
  "relations": "",
  "known_usage": "",
  "fitness_of_purpose": "",
  "usefulness": "",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "object"
}

{  
  "name": "Memento",
  "description": "Capture an object's internal state to be able to restore it later.",
  "category": "Behavioral",
  "context": "",
  "problem_solved": "",
  "solution": "",
  "design": "",
  "implementation_guide": "",
  "illustration": "",
  "code_example": "",
  "co_requisites":"",
  "relations": "",
  "known_usage": "",
  "fitness_of_purpose": "",
  "usefulness": "",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "object"
}

{  
  "name": "Observer",
  "description": "A way of notifying change to a number of classes to ensure consistency between the classes.",
  "category": "Behavioral",
  "context": "",
  "problem_solved": "",
  "solution": "",
  "design": "",
  "implementation_guide": "",
  "illustration": "",
  "code_example": "",
  "co_requisites":"",
  "relations": "",
  "known_usage": "",
  "fitness_of_purpose": "",
  "usefulness": "",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "object"
}

{  
  "name": "State",
  "description": "Alter an object's behavior when its state changes",
  "category": "Behavioral",
  "context": "",
  "problem_solved": "",
  "solution": "",
  "design": "",
  "implementation_guide": "",
  "illustration": "",
  "code_example": "",
  "co_requisites":"",
  "relations": "",
  "known_usage": "",
  "fitness_of_purpose": "",
  "usefulness": "",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "object"
}

{  
  "name": "Strategy",
  "description": "Encapsulates an algorithm inside a class separating the selection from the implementation",
  "category": "Behavioral",
  "context": "",
  "problem_solved": "",
  "solution": "",
  "design": "",
  "implementation_guide": "",
  "illustration": "",
  "code_example": "",
  "co_requisites":"",
  "relations": "",
  "known_usage": "",
  "fitness_of_purpose": "",
  "usefulness": "",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "object"
}

{  
  "name": "Visitor",
  "description": "Adds a new operation to a class without changing the class",
  "category": "Behavioral",
  "context": "",
  "problem_solved": "",
  "solution": "",
  "design": "",
  "implementation_guide": "",
  "illustration": "",
  "code_example": "",
  "co_requisites":"",
  "relations": "",
  "known_usage": "",
  "fitness_of_purpose": "",
  "usefulness": "",
  "applicability": "",
  "system": "",
  "configuration": "",
  "antipattern": "",
  "class_or_object": "object"
}

