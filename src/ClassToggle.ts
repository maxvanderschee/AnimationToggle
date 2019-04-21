class ClassToggle {
	triggers: NodeListOf<HTMLElement>;
	executable: NodeListOf<HTMLElement>;

	constructor () {
		this.triggers = document.querySelectorAll('[data-tr]');
		this.executable = document.querySelectorAll('[data-ex]');
	}

  	public queryTriggers() {
		Array.prototype.forEach.call(this.triggers, (trigger: HTMLElement) => {
			let executeGroup: string[] = trigger.dataset.tr.split(' ');		
			trigger.addEventListener('click', () => { this.toggleClass(executeGroup) }, false);
		});
  	}

	private toggleClass(executeGroup: string[]) {
		executeGroup.forEach((group) => {
			Array.prototype.forEach.call(this.executable, (execute: HTMLElement) => {
				if (execute.dataset.ex.indexOf(group) >= 0) {
					if (execute.classList.contains('active')) {
						execute.classList.remove('active');
						execute.classList.add('inactive');
					} else {
						execute.classList.add('active');
						execute.classList.remove('inactive');
					}	
				}
			})
		});		
  	}
}

const toggle = new ClassToggle();
toggle.queryTriggers();