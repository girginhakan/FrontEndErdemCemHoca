export const initialState = {
    kitaplar: [],
    kategoriler: [],
    secilenKategori: "Tüm Kitaplar",
    secilenKitap: "",
    kitapAdi: "",
    kitapYazari: "",
    kitapKategorisi: "Kategori Seçiniz",
    kitapSayfaSayisi: "",
    kitapResmi: "",
    kitapAciklamasi: "",
    search: ""

}

export const reducer = (state,action) => {
    switch (action.type) {
        //case_1
        case "kitaplariGetir":
            return {
                ...state,
                kitaplar: action.payload
            }
        //case_2
        case "kateorileriGetir":
            return {
                ...state,
                kategoriler: action.payload
            }
        case "resetForm":
            return {
                ...state,
                kitapAdi: "",
                kitapYazari: "",
                kitapKategorisi: "Kategori Seçiniz",
                kitapSayfaSayisi: "",
                kitapResmi: "",
                kitapAciklamasi: ""
            }
        case "secilenKategori":
            return {
                ...state,
                secilenKategori: action.payload
            }
        case "search":
            return {
                ...state,
                search: action.payload
            }
        case "kitapAdi":
            return {
                ...state,
                kitapAdi: action.payload
            }
        case "kitapYazari":
            return {
                ...state,
                kitapYazari: action.payload
            }
        case "kitapKategorisi":
            return {
                ...state,
                kitapKategorisi: action.payload
            }
        case "kitapSayfaSayisi":
            return {
                ...state,
                kitapSayfaSayisi: action.payload
            }
        case "kitapResmi":
            return {
                ...state,
                kitapResmi: action.payload
            }
        case "kitapAciklamasi":
            return {
                ...state,
                kitapAciklamasi: action.payload
            }
        case "kitapEkle":
            const guncelKitaplik = [...state.kitaplar, action.yeni]
            return {
                ...state,
                kitaplar: guncelKitaplik
            }
            case "kitapSil":
            const yeniGuncelKitaplik= state.kitaplar.filter(item=>item.id!==action.id)
            return {
                ...state,
                kitaplar: yeniGuncelKitaplik
            }
            case "kartDuzenle":
            const duzenlenecekKitap=state.kitaplar.find(item=>item.id===action.id)
            return {
                ...state,
                secilenKitap: duzenlenecekKitap,
                kitapAdi: duzenlenecekKitap.kitapAdi,
                kitapYazari: duzenlenecekKitap.kitapYazari,
                kitapKategorisi: duzenlenecekKitap.kitapKategorisi,
                kitapSayfaSayisi: duzenlenecekKitap.kitapSayfaSayisi,
                kitapResmi: duzenlenecekKitap.kitapResmi,
                kitapAciklamasi: duzenlenecekKitap.kitapAciklamasi
            }
            case "kitapDuzenle":
            const editKitaplik =state.kitaplar.map(kitap=>{
                if (kitap.id===state.secilenKitap.id) {
                    return{...action.yeni}
                }else{
                    return{...kitap}
                }
            })
            return {
                ...state,
                kitaplar: editKitaplik,
                secilenKitap:""
            }

    }
}