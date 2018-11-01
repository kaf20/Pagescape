package cc.lockorder.ttrates

import android.arch.lifecycle.ViewModelProviders
import android.os.Bundle
import android.support.v4.app.Fragment
import android.support.v7.widget.RecyclerView
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import kotlinx.android.synthetic.main.exchange_rate_list_fragment.*
import java.math.BigDecimal
import java.util.*


class ExchangeRateListFragment : Fragment() {

    private lateinit var viewModel: ExchangeRateViewModel

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.exchange_rate_list_fragment, container, false)
    }

    override fun onActivityCreated(savedInstanceState: Bundle?) {
        super.onActivityCreated(savedInstanceState)
        viewModel = ViewModelProviders.of(this).get(ExchangeRateViewModel::class.java)

        exchange_rate_list_view.apply {
            setHasFixedSize(true)
            adapter = ExchangeRateAdapter(viewModel.fetch())
        }
    }

}


// ---------------------------------------------------------------------------------------------------
//                                  Exchange Rate Section
// ---------------------------------------------------------------------------------------------------

data class RateEntry(
    val shop: String,
    val currency: Currency,
    val ttLongRate: BigDecimal?,
    val ttShortRate: BigDecimal?,
    val noteLongRate: BigDecimal?,
    val noteShortRate: BigDecimal?
)

class ExchangeRateAdapter(private val rateEntries: List<RateEntry> = emptyList())
    : RecyclerView.Adapter<ExchangeRateAdapter.ViewHolder>() {

    override fun onCreateViewHolder(viewGroup: ViewGroup, position: Int): ViewHolder =
        ViewHolder(
            LayoutInflater.from(viewGroup.context).inflate(R.layout.exchange_rate_item, viewGroup, false))

    override fun onBindViewHolder(viewHolder: ViewHolder, position: Int) {
        val entry = rateEntries[position]
        viewHolder.shopTextView.text = entry.shop
        viewHolder.ttLongRateTextView.text = entry.ttLongRate?.toPlainString() ?: "-"
        viewHolder.ttShortRateTextView.text = entry.ttShortRate?.toPlainString() ?: "-"
        viewHolder.noteLongRateTextView.text = entry.noteLongRate?.toPlainString() ?: "-"
        viewHolder.noteShortRateTextView.text = entry.noteShortRate?.toPlainString() ?: "-"
    }

    override fun getItemCount(): Int = rateEntries.count()

    inner class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        var shopTextView = itemView.findViewById<TextView>(R.id.shop_text_view)!!
        var ttLongRateTextView = itemView.findViewById<TextView>(R.id.tt_long_rate_text_view)!!
        var ttShortRateTextView = itemView.findViewById<TextView>(R.id.tt_short_rate_text_view)!!
        var noteLongRateTextView = itemView.findViewById<TextView>(R.id.note_long_rate_text_view)!!
        var noteShortRateTextView = itemView.findViewById<TextView>(R.id.note_short_rate_text_view)!!
    }
}