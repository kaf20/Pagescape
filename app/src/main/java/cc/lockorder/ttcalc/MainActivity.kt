package cc.lockorder.ttcalc

import android.app.TaskStackBuilder
import android.content.Intent
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.support.v7.widget.RecyclerView
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import kotlinx.android.synthetic.main.exchange_rate_item.view.*
import java.math.BigDecimal
import java.util.*


class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        setSupportActionBar(findViewById(R.id.toolbar))

        val exchangeRates = ExchangeRateService.fetch()
        val onClickListener = View.OnClickListener {
            TaskStackBuilder.create(this)
                .addNextIntentWithParentStack(
                    Intent(this, CalculatorActivity::class.java)
                ).startActivities()
        }
        findViewById<RecyclerView>(R.id.rateListView).apply {
            setHasFixedSize(true)
            adapter = ExchangeRateAdapter(exchangeRates, onClickListener)
        }
    }
}

object ExchangeRateService {

    fun fetch() : List<ExchangeRate> = listOf(
            ExchangeRate(Currency.getInstance("HKD"), BigDecimal.valueOf(7.85)),
            ExchangeRate(Currency.getInstance("HKD"), BigDecimal.valueOf(7.85)),
            ExchangeRate(Currency.getInstance("HKD"), BigDecimal.valueOf(7.85)),
            ExchangeRate(Currency.getInstance("HKD"), BigDecimal.valueOf(7.85)),
            ExchangeRate(Currency.getInstance("HKD"), BigDecimal.valueOf(7.85)),
            ExchangeRate(Currency.getInstance("HKD"), BigDecimal.valueOf(7.85)),
            ExchangeRate(Currency.getInstance("HKD"), BigDecimal.valueOf(7.85)),
            ExchangeRate(Currency.getInstance("HKD"), BigDecimal.valueOf(7.85)),
            ExchangeRate(Currency.getInstance("GBP"), BigDecimal.valueOf(10.05))
        )
}

// ---------------------------------------------------------------------------------------------------
//                                  Exchange Rate Section
// ---------------------------------------------------------------------------------------------------

data class ExchangeRate(val currency: Currency, val rate: BigDecimal)

class ExchangeRateAdapter(private val exchangeRates: List<ExchangeRate> = emptyList(),
                          private val onClickListener: View.OnClickListener)
    : RecyclerView.Adapter<ExchangeRateAdapter.ViewHolder>() {

    override fun onCreateViewHolder(viewGroup: ViewGroup, position: Int): ViewHolder =
        ViewHolder(
            LayoutInflater.from(viewGroup.context).inflate(R.layout.exchange_rate_item, viewGroup, false).apply {
                calculateExchangeRateButton.setOnClickListener(onClickListener)})

    override fun onBindViewHolder(viewHolder: ViewHolder, position: Int) {
        viewHolder.nameTextView.text = exchangeRates[position].currency.currencyCode.plus("@").plus(exchangeRates[position].rate)
    }

    override fun getItemCount(): Int = exchangeRates.count()

    inner class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        var nameTextView: TextView = itemView.findViewById(R.id.exchangeRateTextView)
    }
}