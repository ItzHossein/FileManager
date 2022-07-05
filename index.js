import { mkdir, writeFile } from 'fs';

class File {
	constructor(object) {
		this.object = object;

		var type = object['type'];
		var path = object['path'];
		var name = object['name'];
		var fileformat = object['format'];

		if (!type || type == undefined) {
			return console.log('You Must Enter FileType! (folder or file)');
		}
		if (!path || path == undefined) {
			return console.log("You Must Enter Path! (File Location) or use 'this'");
		}
		if (!name || name == undefined) {
			return console.log('You Must Enter Name!');
		}

		if (type == 'dir' || type == 'folder') {
			if (path == 'this') {
				mkdir(`${name}`, (err) => {
					if (err) throw err;
				});
			} else {
				if (path.endsWith('/')) {
					mkdir(`${path}${name}`, (err) => {
						if (err) throw err;
					});
				} else {
					mkdir(`${path}/${name}`, (err) => {
						if (err) throw err;
					});
				}
			}
		} else if (type == 'file') {
			if (!fileformat || fileformat == undefined) {
				return console.log("You Must Enter FileFormat! (like 'txt' or '.txt')");
			}
			if (path == 'this') {
				if (fileformat.startsWith('.')) {
					writeFile(`${name}${fileformat}`, '', (err) => {
						if (err) throw err;
					});
				} else {
					writeFile(`${name}.${fileformat}`, '', (err) => {
						if (err) throw err;
					});
				}
			} else {
				if (path.endsWith('/')) {
					if (fileformat.startsWith('.')) {
						writeFile(`${path}${name}${fileformat}`, '', (err) => {
							if (err) throw err;
						});
					} else {
						writeFile(`${path}${name}.${fileformat}`, '', (err) => {
							if (err) throw err;
						});
					}
				} else {
					if (fileformat.startsWith('.')) {
						writeFile(`${path}/${name}${fileformat}`, '', (err) => {
							if (err) throw err;
						});
					} else {
						writeFile(`${path}/${name}.${fileformat}`, '', (err) => {
							if (err) throw err;
						});
					}
				}
			}
		}
	}
}
