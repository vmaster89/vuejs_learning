import StartModel from './StartModel.js';

const onClick = function () {
    if ( this.seen ) { 
        this.seen = false;
        this.hideShowButtonText = 'show';
    } else {
        this.seen = true;
        this.hideShowButtonText = 'hide';
    }
}

function* identity() {
	let i = 0;
	while (true) {
		i++;
		yield i;
	}
}
const id = identity();
const onEnter = function () {
    if (!this.message) return false;
    StartModel.entryList.push({
        id: id.next().value, 
        text: this.message,
    });
    this.message = '';
}

const onDelete = (item) => {
  StartModel.entryList = StartModel.entryList.filter((element) => { 
    return element.id !== item.id;
  });
}

export default {
  name: 'StartView',
  props: {
    msg: String
  },
  data: function () {
    return StartModel
  },
  methods: { 
    onClick: onClick,
    onEnter: onEnter,
    onDelete: onDelete,
  }
}