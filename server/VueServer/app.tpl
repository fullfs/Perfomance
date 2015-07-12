<div id="app" style="width: 900px; margin: 0 auto;">
    <div>
        <button v-on="click: refreshList">Передёнуть список</button>
        <form v-on="submit: onSubmit($event)">
            <button>Add #{{items.length + 1}}</button>
        </form>
        <list items="{{items}}" />
    </div>
</div>