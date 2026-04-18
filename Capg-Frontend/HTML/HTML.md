# 🌐 HTML Basics Cheat Sheet

## 📌 What is HTML?

* **HTML**: Used to create and structure web pages
* **HyperText**: Text with links
* **Markup**: Tags used to structure content

---

## 🏷️ Tags

Tags are special keywords written inside `< >` used to tell the browser what to do.

### Types of Tags

1. **Paired / Container Tags** → Have opening + closing tag
2. **Empty / Self-closing Tags** → No closing tag

---

## 🧠 Semantic Tags (Meaningful Tags)

| Letter | Tags                                   |
| ------ | -------------------------------------- |
| H      | `<header>`                             |
| D      | `<details>`                            |
| A      | `<aside>`, `<article>`                 |
| M      | `<main>`, `<mark>`                     |
| N      | `<nav>`                                |
| S      | `<summary>`, `<section>`               |
| T      | `<time>`, `<table>`                    |
| F      | `<footer>`, `<figure>`, `<figcaption>` |

### Common Semantic Tags

* `<header>` → Top section
* `<footer>` → Bottom section
* `<nav>` → Navigation
* `<section>` → Section
* `<article>` → Independent content
* `<aside>` → Sidebar
* `<main>` → Main content

---

## ✍️ Text Formatting Tags

* `<p>` → Paragraph
* `<b>` → Bold
* `<strong>` → Important (bold)
* `<i>` → Italic
* `<em>` → Emphasized
* `<u>` → Underline
* `<mark>` → Highlight

---

## 🔗 Media & Links

* `<a>` → Hyperlink
* `<img>` → Image
* `<audio>` → Audio
* `<video>` → Video
* `<source>` → Media source

---

## 📋 Lists

* `<ul>` → Unordered list
* `<ol>` → Ordered list
* `<li>` → List item
* `<dl>` → Description list

---

## 📊 Tables

* `<table>` → Table
* `<tr>` → Row
* `<th>` → Header cell
* `<td>` → Data cell
* `<caption>` → Table title
* `<thead>` → Table head
* `<tbody>` → Table body
* `<tfoot>` → Table footer

---

## 📝 Forms

* `<form>` → Form
* `<input>` → Input field
* `<textarea>` → Multi-line input
* `<button>` → Button
* `<select>` → Dropdown
* `<option>` → Dropdown option
* `<label>` → Label
* `<fieldset>` → Group form
* `<legend>` → Form title

---

## 📦 Other Useful Tags

* `<div>` → Block container
* `<br>` → Line break
* `<hr>` → Horizontal line
* `<iframe>` → Embed page

---

## ⚙️ Attributes

Attributes give extra information about a tag.

### 1. Global Attributes

* `id` → Unique identifier
* `class` → Group elements
* `style` → Inline CSS
* `title` → Tooltip text

---

### 2. Specific Attributes

* `href` → `<a>`
* `src` → `<img>`
* `alt` → `<img>`

---

### 3. Boolean Attributes

* `disabled`
* `checked`
* `readonly`

---

### 4. Form Attributes

* `action` → Where data is sent
* `method` → GET / POST
* `target` → Where to open result

---

## 🔤 Input Attributes

| Attribute   | Work          |
| ----------- | ------------- |
| type        | Input type    |
| name        | Key name      |
| value       | Default value |
| placeholder | Hint text     |
| required    | Must fill     |
| readonly    | Read only     |
| disabled    | Disable       |
| maxlength   | Max length    |
| min, max    | Range         |

---

## 🔽 Option Attributes

| Attribute | Work           |
| --------- | -------------- |
| value     | Option value   |
| selected  | Default select |
| disabled  | Disable option |

---

## 🔗 Link & Media Attributes

### `<a>`

* `href` → URL
* `target` → `_blank`, etc
* `download` → Download file

### `<img>`

* `src` → Image path
* `alt` → Alternative text
* `width` → Width
* `height` → Height

### `<audio>` / `<video>`

* `controls` → Show controls
* `autoplay` → Auto play
* `loop` → Repeat
* `muted` → Mute

---

## 📊 Table Attributes

| Attribute   | Work          |
| ----------- | ------------- |
| border      | Border        |
| colspan     | Merge columns |
| rowspan     | Merge rows    |
| align       | Alignment     |
| cellpadding | Space inside  |
| cellspacing | Space outside |

---

## 🧩 HTML Element

👉 An **element** = Complete structure (tag + content + attributes)

Example:

```html
<p class="text">Hello</p>
```

---

## ✅ Summary

* HTML is used to **structure web pages**
* Tags define content
* Attributes give extra information
* Elements = tag + content + attributes

---
