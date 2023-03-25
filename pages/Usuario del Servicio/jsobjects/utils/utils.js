export default {
	myVar1: [],
	myVar2: {},
	fn_guardarUsuarioServicio: () => {
		storeValue('usuarioservicio',{
			Id: (txt_id.text>0 ? txt_id.text :0),
			Identificacion: txt_identificacion.text,
			Nombre: txt_nombre.text,
			Direccion: txt_direccion.text,
			Telefono: txt_telefono.text,
			Telefono1: txt_telefono2.text,
			CodCliente: txt_codcliente.text,
			Remitente:   (chk_remitente.isChecked ? 1 : 0),
			Destinatario: (chk_detinatario.isChecked ? 1 : 0),
			Deshabilitado: (chk_deshabilitado.isChecked ? 1 : 0),
		});
		usuarioservicio_post.run().then(() => {
			showAlert('Proceso realizado con éxito'); 
		}).catch(() => showAlert('Error procesando remitentes/destinatario')) ;
	},
	
	fn_updateUsuarioServicio: () => {
		storeValue('usuarioservicio',{
			Id: tbl_usuarioservicio.triggeredRow['id'],
			Identificacion: tbl_usuarioservicio.triggeredRow['identificacion'],
			Nombre:  tbl_usuarioservicio.triggeredRow['nombre'],
			Direccion: tbl_usuarioservicio.triggeredRow['direccion'],
			Telefono: tbl_usuarioservicio.triggeredRow['telefono'],
			Telefono1: tbl_usuarioservicio.triggeredRow['telefono1'],
			CodCliente: tbl_usuarioservicio.triggeredRow['codCliente'],
			Remitente:   tbl_usuarioservicio.triggeredRow['remitente'],
			Destinatario: tbl_usuarioservicio.triggeredRow['destinatario'],
			Deshabilitado: tbl_usuarioservicio.triggeredRow['deshabilitado'],
		});
		
		showModal('modal1');
		//Text2.text=appsmith.store("usuarioservicio");
		//usuarioservicio_post.run();//write code here
	},
	fn_createUsuarioServicio: () => {
		storeValue('usuarioservicio',{});
		showModal('modal1');
		//Text2.text=appsmith.store("usuarioservicio");
		//usuarioservicio_post.run();//write code here
	},	
	myFun2: async () => {
		//use async-await or promises
	}
}