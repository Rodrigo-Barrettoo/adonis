'use strict'

const crypto = use('crypto');
const Helpers = use('Helpers')

/**
 * Generate random string
 *
 *
 * @param { int } length - o tamanho da string que sera gerada
 * @returns { string } uma string randomica do tamanho do length
 *
 */


const str_random = async (length = 40) => {
  let string = '';
  let len = string.length;

  if (len < await length) {
    let size = length - len;
    let bytes = await crypto.randomBytes(size);
    let buffer = Buffer.from(bytes);

    string += buffer
      .toString('base64')
      .replace(/[^a-zA-Z0-9]/g, '')
      .substr(0, size);
  }

  return string;
}

/**
 * Move um unico arquivo para o caminho especifico,
 * se nenhum caminho for especificado então 'public/uploads' sera utilizado
 *
 * @param {FileJar} file arquivo a ser gerenciado
 * @param {string} path caminho para onde o arquivo arquivo deve ser movido
 */

const manage_single_upload = async (file, path = null) => {
  path = path ? path : Helpers._publicPath('uploads');

  // gera um nome aleatorio
  const random_name = await str_random(30);
  let filename = `${new Date().getTime()} - ${random_name}.${file.subtype}`;

  //renomea o arquivo e move ele para path
  await file.move(path, {
    name: filename
  });

  return file;
};

/**
 * move multiplos arquivos para o caminho especificado,
 * se nenhuma for especificado public/uploads' sera utilizado
 *
 * @param { FileJar } fileJar
 * @param { string } path
 * @return { Object }
 */

const manage_multiple_uploads = async (fileJar, path = null) => {
  path = path ? path : Helpers._publicPath('uploads');
  let successes = [], errors = [];

  await Promise.all(fileJar.files.map(async fileJar => {
      let random_name = await str_random(30);
      let filename = `${new Date().getTime()} - ${random_name}.${file.subtype}`;

      await file.move(path, {
        name: filename
      });

      // verifica se foi movido
      if (file.moved()) {
        successes.push(file);
      } else {
        errors.push(file.error());
      }

    })
  );
  return {successes, errors};
};

module.exports = {
  str_random,
  manage_single_upload,
  manage_multiple_uploads,
};
