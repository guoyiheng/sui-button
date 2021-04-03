import Vue, {VueConstructor} from 'vue'

/**
 * @FYI https://www.yuque.com/docs/share/a72a1b84-c0e4-4bd5-853f-6711cb08a507
 */
declare module '@mypridelife/sui-button' {
  class VueComponent extends Vue {
    static install(vue: typeof Vue): void
  }

  type CombinedVueInstance<
    Instance extends Vue,
    Data,
    Methods,
    Computed,
    Props
  > = Data & Methods & Computed & Props & Instance

  type ExtendedVue<
    Instance extends Vue,
    Data,
    Methods,
    Computed,
    Props
  > = VueConstructor<
    CombinedVueInstance<Instance, Data, Methods, Computed, Props> & Vue
  >

  type Combined<Data, Methods, Computed, Props> = Data &
    Methods &
    Computed &
    Props

  type SuiButtonData = {}

  type SuiButtonMethods = {}

  type SuiButtonComputed = {}

  type SuiButtonProps = {}

  type SuiButton = Combined<
    SuiButtonData,
    SuiButtonMethods,
    SuiButtonComputed,
    SuiButtonProps
  >

  export interface SuiButtonType extends VueComponent, SuiButton {}

  const SuiButtonConstruction: ExtendedVue<
    Vue,
    SuiButtonData,
    SuiButtonMethods,
    SuiButtonComputed,
    SuiButtonProps
  >

  export default SuiButtonConstruction
}
