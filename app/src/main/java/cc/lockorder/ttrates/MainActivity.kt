package cc.lockorder.ttrates

import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.widget.FrameLayout

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        setSupportActionBar(findViewById(R.id.toolbar))

        if (findViewById<FrameLayout>(R.id.rate_list_fragment_container) != null) {
            if (savedInstanceState != null) {
                return
            }
            supportFragmentManager.beginTransaction()
                .add(R.id.rate_list_fragment_container, ExchangeRateListFragment().apply { arguments = intent.extras }).commit()
        }
    }
}
