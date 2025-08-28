# Assingment - 05 QnA

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- getElementByID returns an unique ID elemnent when its called.

- getElemntsByClassName returns an element of class. If called class is more
  than one then it returns a nodeList.

- querySelector returns first element of a tag or a class or an ID. And
  querySelectorAll returns all elements of a tag or a class.

## 2. How do you create and insert a new element into the DOM?

- document.createElement(), this method creates an element.

- First I have to declare a const/let variable and store
  document.createElement(elementName).

- Then I need to get the element wherever I want to implement that element and
  store it into a variable.

- element.append() is a modern JavaScript method used to insert content—like
  other elements or text—into a parent DOM element. Lastly I have to append that
  created element into an element.

## 3. What is Event Bubbling and how does it work?

Event Bubbling is a DOM Event Propagation mechanism in Java Script. It starts
with the target and bubbles up through ancestors in DOM Tree whenever an event
called.

## 4. What is Event Delegation in JavaScript?

Event Delegation is a technique which helps us to handle it's child element.
Instead of adding multiple events we attach a single event into a parent
element.

## 5. Why is it useful? What is the difference between preventDefault() and stopPropagation() methods?

- It efficient, clean, and scalable. We don't have to add multiple events.

- preventDefault() method prevents default behaviour of an element

- stopPropagation() method stop an event when a specifiec target fires. For
  example, a parent element has a child element and both are attached with
  event. Whenever the child elements event fires at the same time parent
  elements event also fires. If we use stopPropagation() method in child element
  event then it won't trgiger the parent event.
