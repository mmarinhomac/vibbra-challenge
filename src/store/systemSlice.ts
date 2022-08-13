import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { AppState } from "../store"

type ModalField = {
  id: string,
  label: string
}

interface Modal {
  modalActived: boolean
  modalTitle: string | null
  modalFields: ModalField[] | null
  modalFieldOnChange: ({ id, value } : { id: string, value: string }) => any
  modalAction: () => any
}

export interface SystemState {
  modal: Modal
}

const initialState: SystemState = {
  modal: {
    modalActived: false,
    modalTitle: null,
    modalFields: null,
    modalFieldOnChange: () => {},
    modalAction: () => {},
  },
}

export const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setModal(state: SystemState, action: PayloadAction<{
      state: boolean,
      title?: string,
      fields?: ModalField[],
      onChange?: ({ id, value } : { id: string, value: string }) => any,
      onAction?: () => any
    }>) {
      if (
        action.payload.state &&
        action.payload.title &&
        action.payload.fields &&
        action.payload.onChange &&
        action.payload.onAction
      ) {
        state.modal.modalActived = action.payload.state
        state.modal.modalTitle = action.payload.title
        state.modal.modalFields = action.payload.fields
        state.modal.modalFieldOnChange = action.payload.onChange
        state.modal.modalAction = action.payload.onAction
      } else {
        state.modal.modalActived = initialState.modal.modalActived
        state.modal.modalTitle = initialState.modal.modalTitle
        state.modal.modalFields = initialState.modal.modalFields
        state.modal.modalFieldOnChange = initialState.modal.modalFieldOnChange
        state.modal.modalAction = initialState.modal.modalAction
      }
    },
  }
})

export const { setModal } = systemSlice.actions

export const selectModalState = (state: AppState) => state.system.modal.modalActived
export const selectModalData = (state: AppState) => state.system.modal

export default systemSlice.reducer
