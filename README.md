## Show full text when table cell hovered

1. Add properties below to table cell to hide overflown text 
```
td {
  overflow: 'hidden'
  text-overflow: 'ellipsis'
  white-space: 'nowrap'
  max-width: 24px
}
```

2. Wrap cell text with `span` element
```javascript
<td>
  <span>Text</span>
</td>
```

3. Add properties below to table cell when hovered
```
td:hover {
  overflow: 'visible'
  position: 'relative'
  z-index: 1
}

td:hover span {
  background-color: 'white'
  display: 'inline-block'
}
```