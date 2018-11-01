package cc.lockorder.ttrates

import android.arch.lifecycle.ViewModelProviders
import android.os.Bundle
import android.support.v4.app.Fragment
import android.support.v4.app.FragmentManager
import android.support.v7.widget.RecyclerView
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import cc.lockorder.ttrates.shop.ShopFragment
import kotlinx.android.synthetic.main.exchange_rate_list_fragment.*
import java.math.BigDecimal
import java.util.*


class ExchangeRateListFragment : Fragment() {

    companion object {
        fun newInstance() = ExchangeRateListFragment()
    }

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
            adapter = ExchangeRateAdapter(fragmentManager!!, arguments, viewModel.fetch())
        }
    }
}


// ---------------------------------------------------------------------------------------------------
//                                  Exchange Rate Section
// ---------------------------------------------------------------------------------------------------

data class RateEntry(
    val shop: String,
    val currency: Currency,
    val distanceFrom: BigDecimal,
    val noteLongRate: BigDecimal?,
    val noteShortRate: BigDecimal?
)

class ExchangeRateAdapter(private val fragmentManager: FragmentManager,
                          private val arguments: Bundle?,
                          private val rateEntries: List<RateEntry> = emptyList())
    : RecyclerView.Adapter<ExchangeRateAdapter.ViewHolder>() {

    override fun onCreateViewHolder(viewGroup: ViewGroup, position: Int): ViewHolder =
        ViewHolder(
            LayoutInflater.from(viewGroup.context).inflate(R.layout.exchange_rate_item, viewGroup, false), arguments)

    override fun onBindViewHolder(viewHolder: ViewHolder, position: Int) {
        val entry = rateEntries[position]
        viewHolder.shopTextView.text = entry.shop
        viewHolder.distanceFromTextView.text = entry.distanceFrom.toPlainString() ?: "-"
        viewHolder.noteLongRateTextView.text = entry.noteLongRate?.toPlainString() ?: "-"
        viewHolder.noteShortRateTextView.text = entry.noteShortRate?.toPlainString() ?: "-"
    }

    override fun getItemCount(): Int = rateEntries.count()

    inner class ViewHolder(itemView: View, arguments: Bundle?) : RecyclerView.ViewHolder(itemView) {
        var shopTextView = itemView.findViewById<TextView>(R.id.shop_text_view)!!.apply {
            setOnClickListener {
                fragmentManager.beginTransaction()
                    .replace(R.id.rate_list_fragment_container, ShopFragment().apply { setArguments(arguments) })
                    .addToBackStack(null)
                    .commit()
            }
        }
        var distanceFromTextView = itemView.findViewById<TextView>(R.id.distance_from_text_view)!!
        var noteLongRateTextView = itemView.findViewById<TextView>(R.id.note_long_rate_text_view)!!
        var noteShortRateTextView = itemView.findViewById<TextView>(R.id.note_short_rate_text_view)!!
    }
}