import path from 'path';
import tmp from 'tmp';

export default (shell, source, destination, date) => {
  tmp.dir((err, temporary) => {
    const basename = path.basename(source);
    const tmpSource = temporary + path.sep + basename;
    const finalDestination = `${destination}${path.sep}${basename}.${date}`;

    if (err) {
      throw err;
    }

    console.log(`copying ${source} to ${finalDestination}`);

    shell.cp('-Rf', source, temporary);
    shell.mv(tmpSource, finalDestination);
  });
};
