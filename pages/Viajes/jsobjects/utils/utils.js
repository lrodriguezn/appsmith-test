export default {
	fn_guardar: () => {
		storeValue('usuarioservicio',{
			Id: (txt_id.text>0 ? txt_id.text :0),
			Identificacion: txt_codigo.text,
			Nombre: txt_detalles.text,
		});
		/*
		usuarioservicio_post.run().then(() => {
			showAlert('Proceso realizado con éxito'); 
		}).catch(() => showAlert('Error procesando remitentes/destinatario')) ;
		*/
	},
	
	fn_update: () => {
		storeValue('viaje',{
			Id: tbl_viajes.triggeredRow['id'],
			Codigo: tbl_viajes.triggeredRow['codigo'],
			Detalles:  tbl_viajes.triggeredRow['Detalles'],
		});
		
		
		
		showModal('modal_viajes');
	},
	fn_create: () => {
		storeValue('viaje',{});
		showModal('modal_viajes');
	},	
	llenar_combo: (combo) => {
		storeValue('combo','naviera');
	},
	mycombo_data: async () => {
		//const data=await	navieras_get_all.run();
		//cmb_estado.options={ label: "text", value: 1 } ;
	}
}