const autoScrollChat = (el) => {
	el.current && el.current.scrollIntoView({behavior: 'smooth', block: 'end'});
}

export default autoScrollChat;