import { FaMinusCircle, FaPlusCircle } from "react-icons/fa"
import { useCreateForm } from "@/hooks/useCreateForm"

export const CreateForm = () => {
  const {
    incrementAmidaCount,
    decrementAmidaCount,
    handleSubmit,
    handleChange,
    handleBlur,
    changeValueAtari,
    changeValueNumbers,
    changeValueAllClear,
    errors,
    isSubmitting,
    touched,
    values,
  } = useCreateForm()

  return (
    <form onSubmit={handleSubmit} className="form-wrapper">
      <section className="form-item">
        <h3>タイトル</h3>
        <div className="form-item-text">15文字以内でタイトルを決めます。</div>
        <input
          id="amidaTitle"
          name="amidaTitle"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.amidaTitle}
        />
        {touched.amidaTitle && errors.amidaTitle ? <div className="form-error-text">{errors.amidaTitle}</div> : null}
      </section>
      <section className="form-item">
        <h3>アイテム数 {values.amidaCount} 個</h3>
        <div>
          <div className="form-item-text">2~10個まで対応しています。</div>
          <div className="form-item-buttons">
            <button type="button" onClick={incrementAmidaCount} className="count-button">
              <FaPlusCircle size={35} />
              アイテムを増やす
            </button>
            <button type="button" onClick={decrementAmidaCount} className="count-button">
              <FaMinusCircle size={35} />
              アイテムを減らす
            </button>
          </div>
        </div>
      </section>
      <section className="form-item">
        <h3>アイテム編集</h3>
        <div className="form-item-buttons">
          <button type="button" onClick={changeValueAtari} className="count-button">
            当たりを追加
          </button>
          <button type="button" onClick={changeValueNumbers} className="count-button">
            1〜10を追加
          </button>
          <button type="button" onClick={changeValueAllClear} className="count-button">
            入力値を全クリア
          </button>
        </div>
        <div className="form-item-text">
          または、以下のアイテムを編集してください。あみだくじの下にアイテムがランダム順で表示されます。
        </div>
        {values.amidaValues.map((amidaValue, index) => {
          return (
            <div key={index}>
              {index < values.amidaCount && (
                <>
                  <input
                    id={`amidaValues.${index}`}
                    name={`amidaValues.${index}`}
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={amidaValue}
                    className="amida-value"
                  />
                </>
              )}
            </div>
          )
        })}
        {touched.amidaValues && errors.amidaValues ? <div className="form-error-text">{errors.amidaValues}</div> : null}
      </section>
      <button type="submit" disabled={isSubmitting} className="create-button">
        あみだくじを作成する
      </button>
    </form>
  )
}
